module.exports.homePage = (req, res) => {
  const Data = require("../../models/Data");
  Data.findOne({}, {}, { sort: { createdAt: -1 } }, (err, result) => {
    res.render("user/index", { data: result });
  });
};
