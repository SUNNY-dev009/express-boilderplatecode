const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello Vue");
});

app.listen(4000, () => {
  console.log("server started");
});
