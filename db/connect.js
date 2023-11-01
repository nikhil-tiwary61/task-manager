const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://nikhiltiwary28022000:yUxoaMkK4BKqsS4K@cluster0.h0pfgvc.mongodb.net/task-manager?retryWrites=true&w=majority";

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(connectionString);
  console.log("database connected");
}
