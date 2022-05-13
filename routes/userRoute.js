const { Router } = require("express");

const { getDataList } = require("../controllers/user/getDataList");
const { homePage } = require("../controllers/user/homePage");

const router = Router();

router.get("/", homePage);
router.get("/history", getDataList);

module.exports = router;
