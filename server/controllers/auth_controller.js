const db = require("../db_connection.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const authController = {};

authController.signupUser = (req, res, next) => {
    const { username, email, password, first_name, last_name } = req.body;
    // assume validation on frontend
    // save credentials

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
    const { username, email, password, first_name, last_name } = req.body;
    const { id } = res.locals._id;
    const accessToken = jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: "1d",
    });
    console.log(accessToken);
    const queryString = `
        INSERT INTO sessions (user_id, session_token)
        VALUES ($1, $2);
    `;
    db.query(queryString, [email], (err, response) => {});
    next();
};

module.exports = authController;
