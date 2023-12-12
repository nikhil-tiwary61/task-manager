const mongoose = require("mongoose");

async function main(url) {
  await mongoose.connect(url);
  console.log("database connected");
}

module.exports = main;
