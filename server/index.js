var express = require("express");
const path = require("path");
const {v1_router} = require('./v1/index')
const {v2_router} = require('./v2/index')

var app = express();
app.use("/v1",v1_router)
app.use("/v2",v2_router)
app.use((req, res, next) => {
  res.status(404).send("Not Found")
});

app.listen(3000);
