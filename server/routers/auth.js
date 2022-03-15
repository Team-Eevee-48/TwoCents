const router = require("express").Router();
// IMPORT CONTROLLER FILE FOR PLACEHOLDER
const auth = require("../controllers/auth_controller.js");

router.get("/", (req, res) => {});

router.post("/signup", auth.signupUser, auth.createSession, (req, res) => {
    console.log(res.locals);
    // send jwt as cookie
    res.json(res.locals);
});

router.post("/login", (req, res) => {});

router.delete("/logout", (req, res) => {});

module.exports = router;
