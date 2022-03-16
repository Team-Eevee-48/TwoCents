require("dotenv").config();
const { Pool } = require("pg");

// NODE_ENV injected from CLI

const PG_URI =
    process.env.NODE_ENV === "development"
        ? process.env.TEST_URI_CONNECTION
        : process.env.URI_CONNECTION;

console.log("connect to: ", PG_URI);

const pool = new Pool({
    connectionString: PG_URI,
});

module.exports = {
    query: (text, params, callback) => {
        console.log("executed query:", text);
        return pool.query(text, params, callback);
    },
};
