const express = require("express");
const router = express.Router();
const models = require("../models");

router.get("/", (req, res) => {
  res.render("login")
});

router.get("/login", (req, res) => {
  res.render("login")
});

router.get("/register", (req, res) => {
  res.render("register")
});

router.get("/gab", (req, res) => {
  res.render("gab")
});

router.get("/gablikes", (req, res) => {
  res.render("gablikes")
});

router.get("/homepage", (req, res) => {
  res.render("homepage")
});

module.exports = router;
