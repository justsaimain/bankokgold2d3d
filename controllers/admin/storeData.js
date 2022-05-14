const Data = require("../../models/Data");

module.exports.storeData = async (req, res) => {
  try {
    let xmlHttp = null;
    xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "/live", false);
    xmlHttp.send(null);
    let rData = JSON.parse(xmlHttp.response);
    const data = new Data({
      buy: rData.num_one,
      sell: rData.num_two,
      three_d: rData.three_d,
      two_d: rData.two_d,
    });

    twoD
      .save()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (err) {
    console.error(err);
  }
};
