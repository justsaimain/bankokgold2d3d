const Data = require("../../models/Data");

module.exports.storeData = async (req, res) => {
  const axios = require("axios");
  const dotenv = require("dotenv");
  dotenv.config();

  try {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();

    const { data } = await axios.get(process.env.BASE_URL + "/live");
    const sData = new Data({
      buy: data.num_one,
      sell: data.num_two,
      three_d: data.three_d,
      two_d: data.two_d,
      date: dd + "/" + mm + "/" + yyyy,
      time: today.toLocaleTimeString([], { timeStyle: "short" }),
    });

    sData
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
