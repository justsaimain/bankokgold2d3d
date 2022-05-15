const { Router } = require("express");
const express = require("express");
const router = Router();
const localStorage = require("localStorage");

const { deleteData } = require("../controllers/admin/deleteData");
const { storeData } = require("../controllers/admin/storeData");
const { updateData } = require("../controllers/admin/updateData");

const dotenv = require("dotenv");
dotenv.config();

const bodyParser = require("body-parser");
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");
const jwtKey = process.env.TOKEN_SECRET;
const jwtExpirySeconds = 300; // second

router.use(express.static("public"));

router.get("/login", (req, res) => {
  res.render("admin/login");
});

router.post("/login", (req, res) => {
  const token = localStorage.getItem("token");
  if (token) {
    localStorage.removeItem("token");
  }

  const { username, password } = req.body;

  Admin.find({}, {}, {}, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      if (username !== "" || password !== "") {
        const filtered = result.filter((admin) => admin.username === username);
        if (filtered.length > 0) {
          if (filtered[0].password === password) {
            const token = jwt.sign({ username }, jwtKey, {
              algorithm: "HS256",
              expiresIn: jwtExpirySeconds,
            });
            localStorage.setItem("token", token);
            res.redirect("/panel");
          } else {
            res.redirect("/panel/login");
          }
        } else {
          res.redirect("/panel/login");
        }
      } else {
        res.redirect("/panel/login");
      }
    }
  });
});

router.use((req, res, next) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return res.redirect("/panel/login");
  }

  jwt.verify(token, jwtKey, (err, user) => {
    if (err) return res.sendStatus(403);
    next();
  });
});

router.get("/", (req, res) => {
  res.send("<p>admi page</p>");
});
router.post("/", updateData);
router.delete("/", deleteData);
router.get("/store", storeData);
router.get("/token", (req, res) => {
  function generateAccessToken(username) {
    return jwt.sign(username, process.env.TOKEN_SECRET, {
      expiresIn: "1800s",
    });
  }
  const token = generateAccessToken({ username: "admin" });
  res.json(token);
});

module.exports = router;
