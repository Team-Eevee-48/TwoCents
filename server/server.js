require("dotenv").config();
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const port = process.env.NODE_ENV === "development" ? 3001 : 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

app.use("/auth", require("./routers/auth.js"));
app.use("/feedback", require("./routers/feedback-data.js"));

app.get("/", (req, res) => {
    res.json({ hi: "test" });
});

// CATCH-ALL ERROR HANDLER
app.use((req, res) => {
    console.log("Error: page not found");
    res.status(404).send("Error: page not found");
});

// GLOBAL ERROR HANDLER
app.use((err, req, res, next) => {
    const defaultErr = {
        log: "Express error handler caught unknown middleware error",
        status: 500,
        message: { err: "An error occurred" },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj);
    return res.status(errorObj.status).json(errorObj.message);
});

app.listen(port, () => {
    console.log(`Server Listening on ${port}`);
});

module.exports = app;
