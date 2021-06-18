var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("Hello serverless world!");
});

app.listen(8080);
