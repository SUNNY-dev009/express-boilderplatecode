const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("working change.. ");
});

app.listen(4000, () => {
  console.log("server started");
});
