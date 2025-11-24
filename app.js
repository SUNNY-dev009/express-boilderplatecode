const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("chaning change fab.. ");
});

app.get("/test", (req, res) => {
  console.log("call start")
  res.send("<h1>Hello Imp!</h1>");
});


app.listen(4000, () => {
  console.log("server started");
});
