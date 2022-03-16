require("dotenv").config();
process.env.NODE_ENV = "development";

const request = require("supertest");
const db = require("../db_connection.js");
const app = require("../server.js");
const cookieParser = require("cookie-parser");

/**
 * This File test
 *      auth routes/database
 *      Sessions database
 */

beforeAll((done) => {
    const query = `
        DELETE FROM sessions;
        DELETE FROM users
        WHERE username != 'Michael';
    `;
    db.query(query, null, (err, res) => {
        if (err) console.log("error: from delete before ", err);
        // console.log("before: delete all users", res);
        done();
    });
});

describe("GET /users", () => {
    it("responds with users", (done) => {
        request(app).get("/").expect(200, done);
    });
});
describe("POST /auth/signup", () => {
    const testUser = {
        username: "test",
        password: "123456",
        email: "test@gmail.com",
        first_name: "Will",
        last_name: "Sentence",
    };

    it("responds with body of id and username and status 200", (done) => {
        request(app)
            .post("/auth/signup")
            .send(testUser)
            .expect("Content-Type", /json/)
            .expect(function (res) {
                expect(typeof res.body._id).toEqual("number");
                expect(typeof res.body.username).toEqual("string");
            })
            .expect(200, done);
    });

    it("responds with 500 error for adding same email", (done) => {
        request(app)
            .post("/auth/signup")
            .send(testUser)
            .expect("Content-Type", /json/)
            .expect(500, done);
    });
});

describe("POST /auth/login", () => {
    const testUser = {
        email: "michael@gmail.com",
        password: "123456",
    };

    xit("user id and username are sent back with login", (done) => {
        request(app)
            .post("/auth/login")
            .send(testUser)
            .expect("Content-Type", /json/)
            .end(function (err, res) {
                // console.log("test 1: ", res.body, typeof res.body._id);
                expect(typeof res.body._id).toEqual("number");
                expect(typeof res.body.username).toEqual("string");
                done();
            });
    });

    xit("TEST NOT WORKING: access token cookie should be set", (done) => {
        request(app)
            .post("/auth/login")
            .send(testUser)
            .expect("Content-Type", /json/)
            .end(function (err, res) {
                console.log("cookies test 1: ", res);
                // const cookies = res.headers["set-cookie"][0]
                //     .split(",")
                //     .map((item) => item.split(";")[0]);
                // const cookie = cookies.join(";");
                // console.log("COOKIES: ", cookies);
                // expect(cookie).toBe("string");
                done();
            });
    });

    it("responds with 200 for successful login", (done) => {
        request(app)
            .post("/auth/login")
            .send(testUser)
            .expect("Content-Type", /json/)
            .expect(200, done);
    });
});
