const { Router } = require("express");
const { deleteData } = require("../controllers/admin/deleteData");
const { storeData } = require("../controllers/admin/storeData");
const { updateData } = require("../controllers/admin/updateData");

const router = Router();

router.get("/", (req, res) => {
  res.render("admin/index");
});

router.post("/", updateData);
router.delete("/", deleteData);
router.get("/store", storeData);
module.exports = router;
