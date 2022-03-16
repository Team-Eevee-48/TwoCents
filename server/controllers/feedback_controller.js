const db = require("../db_connection.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const feedbackController = {};

feedbackController.getAll = (req, res, next) => {
    /* later add pagination with SKIP */
    const queryString = `
        SELECT *
        FROM feedback
        LIMIT 20;
    `;
    db.query(queryString, undefined, (err, response) => {
        if (err)
            return next({
                log: `feedbackController.getAll ERROR: ${err}`,
                message: {
                    err: "Database connection error.",
                },
            });
        if (response.rows[0]) {
            res.locals.data = response.rows;
            return next();
        } else
            return next({
                log: `feedbackController.getAll SELECT * FROM feedback ERROR: ${err}`,
                message: {
                    err: "No data.",
                },
            });
    });
};

feedbackController.create = (req, res, next) => {
    const { title, description, category, user_id } = req.body;
    // const { title, description, category } = req.body;
    // const user_id = res.locals._id;

    const query = `
        INSERT INTO feedback (title, description, category, user_id)
        VALUES ($1, $2, $3, $4)
        RETURNING _id;
    `;

    db.query(
        query,
        [title, description, category, user_id],
        (err, response) => {
            if (err)
                return next({
                    log: `feedbackController.create ERROR: ${err}`,
                    message: {
                        err: "Inappropriate data types entered.",
                    },
                });
            if (response.rows[0]) {
                res.locals.post_id = response.rows[0]._id;
                return next();
            } else
                return next({
                    log: `feedbackController.create INSERT INTO ERROR: ${err}`,
                    message: {
                        err: "Unable to post feedback to database.",
                    },
                });
        }
    );
};

feedbackController.edit = (req, res, next) => {};

feedbackController.delete = (req, res, next) => {
    const post_id = req.params.id;
    // console.log(post_id);
    const query = `
        DELETE FROM feedback
        WHERE _id = $1
        RETURNING _id;
    `;
    db.query(query, [post_id], (err, response) => {
        if (err)
            return next({
                log: `feedbackController.delete ERROR: ${err}`,
                message: {
                    err: "Delete not completed",
                },
            });
        if (response.rows[0]) {
            res.locals.post_id = response.rows[0]._id;
            return next();
        } else
            return next({
                log: `feedbackController.delete DELETE FROM feedback ERROR: ${err}`,
                message: {
                    err: "Unable to delete post from database.",
                },
            });
    });
};

module.exports = feedbackController;
