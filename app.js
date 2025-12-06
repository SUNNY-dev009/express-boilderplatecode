const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("chaning change fab.. ");
});

app.get("/test", (req, res) => {
  console.log("🚀 added Logs ❤️")
res.send("<h1>❤️🚀❤️Boom webhook calling!!</h1>");
});


app.listen(4000, () => {
  console.log("server started");
});
