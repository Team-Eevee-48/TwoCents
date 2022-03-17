const router = require("express").Router();
// IMPORT CONTROLLER FILE FOR PLACEHOLDER
const auth = require("../controllers/auth_controller.js");

router.get("/", auth.checkAccessToken, auth.getUser, (req, res) => {
    return res.json(res.locals);
});

router.post("/signup", auth.signupUser, auth.createSession, (req, res) => {
    // console.log(res.locals);
    // send jwt as cookie

    /**
     * LOCALS (_id, username)
     * */
    // res.cookie("accessToken", res.locals.accessToken, { httpOnly: true });
    // console.log("signup resss locals: ", res.locals);
    return res.json({
        ...res.locals,
        status: true
    });
});

router.post("/login", auth.loginUser, auth.createSession, (req, res) => {
    return res.json(res.locals);
});

router.delete("/logout", (req, res) => {});

module.exports = router;
