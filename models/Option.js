const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const optionSchema = new Schema(
  {
    sell: {
      type: String,
      required: true,
    },
    buy: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      default: true,
      required: false,
    },
  },
  { timestamps: true }
);

const Option = mongoose.model("Option", optionSchema);

module.exports = Option;
