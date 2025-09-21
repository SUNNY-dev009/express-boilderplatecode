const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("new changes applied");
});

app.listen(4000, () => {
  console.log("server started");
});
