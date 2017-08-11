const router = require("express").Router();
const models = require("../models");
const passport = require("passport");

router.get("/login", (req, res) => {
  res.render("/login")
})

router.post("/login", (req, res) => {
  models.user.find({
    where: {
      username: req.body.username
    }
  })
  .then(user => {
    if(user.auth(req.body.password)) {
      console.log("Succesfull Login");
      res.redirect("/home");
    } else {
      console.log("User not found.");
      res.redirect("/login")
    }
  })
  .catch(err => {
    console.log("DB PROBLEM");
  })
})

router.get("/register", (req, res) => {

}

router.post("/register")

module.exports = router;
