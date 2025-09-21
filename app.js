const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("back to old change ");
});

app.listen(4000, () => {
  console.log("server started");
});
