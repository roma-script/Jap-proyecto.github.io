const express = require("express");


const app = express();

app.get ("/listado" , (req, res) => {
res.header("Access-Control-Allow-Origin")
res.sendFile(__dirname + "/json/products.json");
})

app.get ("/listado/id:" , (req, res) => {
  res.header("Access-Control-Allow-Origin")
  res.sendFile(__dirname + "/json/" + req.params.id + ".json");
  })


app.listen(5000, () => {    
  console.log("Server running on port")
});
