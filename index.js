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

const port = 8080;
app.listen(port, () => {
  console.log("server started");
});
