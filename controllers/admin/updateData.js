module.exports.updateData = async (req, res) => {
  const Option = require("../../models/Option");

  const { sell, buy } = req.body;

  var query = {},
    update = { sell, buy },
    options = { upsert: true, new: true, setDefaultsOnInsert: true };

  Option.findOneAndUpdate(query, update, options, function (error, result) {
    if (error) return;

    res.redirect("/admin");
    // do something with the document
  });
};
