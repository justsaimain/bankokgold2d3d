const { Router } = require("express");

const { getDataList } = require("../controllers/user/getDataList");
const { homePage } = require("../controllers/user/homePage");
const { liveData } = require("../controllers/user/liveData");

const router = Router();

router.get("/", homePage);
router.get("/live", liveData);
router.get("/history", getDataList);

module.exports = router;
