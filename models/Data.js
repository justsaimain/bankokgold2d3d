const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dataSchema = new Schema(
  {
    buy: {
      type: String,
      required: false,
    },
    sell: {
      type: String,
      required: false,
    },
    two_d: {
      type: String,
      required: false,
    },
    three_d: {
      type: String,
      required: false,
    },
    date: {
      type: String,
      required: false,
    },
    time: {
      type: String,
      required: false,
    },
  },
  { timestamps: false }
);

const Data = mongoose.model("Data", dataSchema);

module.exports = Data;
