const db = require("../db_connection.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const authController = {};

const cleanSessions = `
    DELETE FROM sessions 
    WHERE expires_at < CURRENT_TIMESTAMP;
    `;

authController.signupUser = (req, res, next) => {
    const { username, email, password, first_name, last_name } = req.body;
    // assume validation on frontend
    // save credentials

    console.log('signup', req.body);

    // check if user email already exist
    const queryString = `
        SELECT email
        FROM users
        WHERE email = $1;
    `;
    db.query(queryString, [email], (err, response) => {
        if (err)
            return next({
                log: `authController.signupUser LOOK UP QUERY: ERROR: ${err}`,
                message: {
                    err: "Database connection error.",
                },
            });
        if (!response.rows.length) {
            // hash password
            bcrypt
                .hash(password, 10)
                .then((hashed) => {
                    const queryString = `
              INSERT INTO users (username, email, password, first_name, last_name)
              VALUES ($1, $2, $3, $4, $5)
              RETURNING _id, username;
              `;
                    db.query(
                        queryString,
                        [username, email, hashed, first_name, last_name],
                        (err, response) => {
                            if (err)
                                return next({
                                    log: `authController.signupUser INSERT INTO db query ERROR: ${err}`,
                                    message: {
                                        err: "Database connection error.",
                                    },
                                });
                            res.locals._id = response.rows[0]._id;
                            res.locals.username = response.rows[0].username;
                            return next();
                        }
                    );
                })
                .catch((err) =>
                    next({
                        log: `bcrypt ERROR: ${err}`,
                        message: {
                            err: "Database connection error.",
                        },
                    })
                );
        } else {
            return next({ message: { err: "Signup not valid" } });
        }
    });
};

authController.createSession = (req, res, next) => {
    const id = res.locals._id;
    const accessToken = jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: "1d",
    });
    const queryString = `
        INSERT INTO sessions (user_id, session_token)
        VALUES ($1, $2);
    `;
    db.query(queryString, [id, accessToken], (err, response) => {
        if (err)
            return next({
                log: `authController.createSession INSERT INTO session ERROR: ${err}`,
                message: {
                    err: "Database connection error.",
                },
            });
        res.locals.accessToken = accessToken;
        res.locals.status = true;
        res.cookie("accessToken", accessToken, {
            maxAge: 60 * 60 * 1000,
            httpOnly: true,
            secure: true,
        });
        return next();
    });
};

authController.loginUser = (req, res, next) => {
    const { email, password } = req.body;
    const queryString = `
        SELECT password, username, _id
        FROM users
        WHERE email = $1;
    `;
    db.query(queryString, [email], (err, response) => {
        if (err)
            return next({
                log: `authController.loginUser SELECT password ERROR: ${err}`,
                message: {
                    err: "Database connection error.",
                },
            });
        bcrypt.compare(password, response.rows[0].password, (err, result) => {
            if (err)
                return next({
                    log: `authController.loginUser bcrypt compare ERROR: ${err}`,
                    message: {
                        err: "Database connection error.",
                    },
                });
            if (result) {
                res.locals._id = response.rows[0]._id;
                res.locals.username = response.rows[0].username;
                return next();
            } else {
                return next({
                    log: `loginUser bcrypt false ERROR: ${err}`,
                    message: {
                        err: "Incorrect username or password.",
                    },
                });
            }
        });
    });
};

authController.checkAccessToken = (req, res, next) => {

    const cookie = req.cookies.accessToken;
    jwt.verify(cookie, process.env.JWT_SECRET, (err, success) => {
        if (success) {
            console.log("My Cookie + success", cookie);
            res.locals.permitted = true;
            res.locals._id = success.id;
            next();
        } else {
            return next({
                log: `checkAccessToken jwt not verified ERROR: ${err}`,
                message: {
                    err: "Incorrect access.",
                },
            });
        }
    });
};

authController.getUser = (req, res, next) => {
    const id = res.locals._id
    const query = `
        SELECT * FROM users
        WHERE _id = $1;
    `;
    db.query(query, [id], (err, response) => {
         if (err)
                return next({
                    log: `authController.getUser ERROR: ${err}`,
                    message: {
                        err: "Database connection error.",
                    },
                });
        if(response.rows[0]){
            res.locals.username = response.rows[0].username;
            return next()
        }
        return next({err: 'User not found'})
    })
}

module.exports = authController;
