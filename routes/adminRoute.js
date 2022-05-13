const { Router } = require("express");

const { scrapeData } = require("../controllers/admin/scrapeData");
const { twoDList } = require("../controllers/admin/twoDList");

const router = Router();

router.get("/scrape", scrapeData);
router.get("/two-d", twoDList);

module.exports = router;
