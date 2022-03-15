const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", require("./routers/auth.js"));

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

app.listen(3000, () => {
    console.log("Server Listening on 3000");
});
