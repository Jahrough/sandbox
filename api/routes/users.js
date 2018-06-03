const express = require("express");
const router = express.Router();

router.post("/", (req, res, next) => {
    res.status(201);
    res.json({
        message: "added a new user",
        id: req.params.id
    })
})

router.patch("/:id", (req, res, next) => {
    res.status(200);
    res.json({
        message: "updated user",
        id: req.params.id
    })
})

router.delete("/:id", (req, res, next) => {
    res.status(200);
    res.json({
        message: "deleted user",
        id: req.params.id
    })
})

router.get("/:id", (req, res, next) => {
    res.status(200);
    res.json({
        message: "get a specific user",
        id: req.params.id
    })
})

router.get("/", (req, res, next) => {
    res.status(200);
    res.json({
        message: "get all users"
    })
});

module.exports = router;