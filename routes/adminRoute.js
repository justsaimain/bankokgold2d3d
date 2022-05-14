const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.send("<p>this is panel</p>");
});
module.exports = router;
