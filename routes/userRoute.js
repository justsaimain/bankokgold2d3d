const { Router } = require("express");

const { getDataList } = require("../controllers/user/getDataList");
const { homePage } = require("../controllers/user/homePage");
const { liveData } = require("../controllers/user/liveData");
const { getServerStats } = require("../controllers/user/getServerStats");

const router = Router();

router.get("/", homePage);
router.get("/live", liveData);
router.get("/results", getDataList);
router.get("/stats", getServerStats);

module.exports = router;
