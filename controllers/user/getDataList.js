const Data = require("../../models/Data");

module.exports.getDataList = async (req, res) => {
  try {
    Data.find()
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
