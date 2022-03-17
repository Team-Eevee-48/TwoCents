const router = require("express").Router();
// IMPORT CONTROLLER FILE FOR PLACEHOLDER
const auth = require("../controllers/auth_controller.js");
const feedback = require("../controllers/feedback_controller.js");

/*FEEDBACK ROUTER*/

router.get("/", feedback.getAll, (req, res) => {
    /* limit to 20
    sends back all feedback table */
    // res.json({ test: "hi" });
    return res.json(res.locals);
});

router.post("/", /*auth.checkAccessToken,*/ feedback.create, (req, res) => {
    /* create new post 
        Sends back post_id
    */
    return res.json(res.locals);
});

router.put("/", /*auth.checkAccessToken,*/ feedback.edit, (req, res) => {
    /* edit existing post if you own the post */
    return res.json(res.locals);
});

router.delete(
    "/:id",
    /*auth.checkAccessToken,*/ feedback.delete,
    (req, res) => {
        /* delete existing post if you own the post, or if admin */
        return res.json({ status: "success" });
    }
);

module.exports = router;
