const express = require("express");

const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();

const { scrapeData } = require("./controllers/admin/scrapeData");
const cron = require("node-cron");

//  0 0 2 * * * ( Every 2AM )

cron.schedule("* * * * *", () => {
  //   scrapeData();
  console.log("running a task every minute");
});

const adminRoutes = require("./routes/adminRoute");

const dbURI = process.env.DB_URI;

const app = express();

const port = process.env.PORT;

app.set("view engine", "ejs");
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(function (result) {
    console.log("App is running at Port " + port);
    app.listen(port);
  })
  .catch((err) => console.log(err));

app.use("/admin", adminRoutes);
