module.exports.liveData = async (req, res) => {
  const axios = require("axios");
  const cheerio = require("cheerio");

  const url =
    "https://classic.set.or.th/mkt/marketsummary.do?language=en&country=US";

  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const set = $(
      "#maincontent > div > div:nth-child(3) > div > div > table > tbody > tr:nth-child(1) > td:nth-child(2)"
    ).text();

    const value = $(
      "#maincontent > div > div:nth-child(3) > div > div > table > tbody > tr:nth-child(1) > td:nth-child(8)"
    ).text();

    const last_update = $(
      "#maincontent > div > div:nth-child(5) > div:nth-child(1) > div:nth-child(2)"
    ).text();

    const status = $(
      "#maincontent > div > div:nth-child(5) > div:nth-child(1) > div:nth-child(3) > span"
    ).text();

    const returnData = {
      set,
      value,
      last_update,
      status,
    };

    res.json({ data: returnData });
  } catch (err) {
    console.error(err);
  }
};
