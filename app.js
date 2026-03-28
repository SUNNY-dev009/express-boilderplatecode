const express = require("express");
const app = express();

app.get("/posts", (req, res) => {
  console.log("hello...")
  res.send("chaning change fab.. ");
});


app.get("/products", async(req, res) => {
  const pr =await  fetch("https://dummyjson.com/products");
  const rs = await pr.json()
  res.send(rs)
});




app.listen(4000, () => {
  console.log("server started");
});
