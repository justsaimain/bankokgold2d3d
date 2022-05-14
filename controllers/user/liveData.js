module.exports.liveData = async (req, res) => {
  const seedrandom = require("seedrandom");
  const interval = 60 * 30; // 30 is for every 30 second data change
  const rng = seedrandom(Math.floor((new Date().getSeconds() / interval) * 60));
  const rng2 = seedrandom(
    Math.floor((new Date().getSeconds() / interval) * 60)
  );

  const num_one = rng().toString().split(".")[1].substring(0, 3);
  const num_two = rng2().toString().split(".")[1].slice(-3);

  res.json({
    num_one: "1." + num_one,
    num_two: "2." + num_two,
    two_d: num_one.slice(-1) + num_two.slice(-1),
    three_d: num_one,
  });
};
