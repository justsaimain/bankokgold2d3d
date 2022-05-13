const TwoD = require("../../models/TwoD");

module.exports.getDataList = async (req, res) => {
  try {
    TwoD.find()
      .then((result) => {
        console.log(result);
        res.render("user/dataList", {
          data: result,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (err) {
    console.error(err);
  }
};
