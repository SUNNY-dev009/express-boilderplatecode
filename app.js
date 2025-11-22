const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("chaning change.. ");
});

app.get("/test1", (req, res) => {
  res.send("added logs.. ");
  console.log("Adding logs to check...")
});

app.listen(4000, () => {
  console.log("server started");
});
