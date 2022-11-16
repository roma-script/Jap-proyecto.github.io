const express = require("express");
const path = require("path");

const app = express();



app.get("/ecommerce", (req, res) => {
  res.header("Access-Control-Allow-Origin")
  res.sendFile(path.join (__dirname + "/index.html"));
})

app.listen(8000, () => {    
  console.log("Server running on port")
  
});