const connectDb = require("./db/connect");
require("dotenv").config();
const express = require("express");
const tasks = require("./routes/tasks");
const app = express();

//middlewares
app.use(express.json());

//routes
app.get("/hello", (req, res) => {
  res.send("hello world");
});

app.use("/api/v1/tasks", tasks);

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI);
    app.listen(process.env.PORT, () => {
      console.log(`server started at port ${process.env.PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
