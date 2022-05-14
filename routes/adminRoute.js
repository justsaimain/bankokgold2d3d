const { Router } = require("express");
const { updateData } = require("../controllers/admin/updateData");

const router = Router();

router.get("/", (req, res) => {
  res.render("admin/index");
});

router.post("/", updateData);
module.exports = router;
