var express = require("express");
var http = require("http");
const fs = require("fs");
const path = require("path");
const { query } = require("express-validator");
// const {addNewRecordIdempotancy} = require("./modules")
// import {addNewRecordIdempotancy} from "./modules.js"

var app = express();
var idempotency_local_storage = [];

const apiMiddleware1 = (req, res, next) => {
  // your-middleware-logic
  // console.log(req);

  if (req.headers["idempotency-key"]) {
    console.log(idempotency_local_storage.indexOf(req.headers["idempotency-key"]))
    if (idempotency_local_storage.indexOf(req.headers["idempotency-key"])!==-1) {
      res.status(200).send("request already fulfilled!");
    } else {

      idempotency_local_storage.push(req.headers["idempotency-key"])
      next();
    }
  } else {
    res.status(300).send("idempotency key is missing");
  }
};
app.use(apiMiddleware1);
// app.use(apiMiddleware1);
app.get("/", (req, res) => {
  // console.log("called",path.join(__dirname,"config.txt"),fs.existsSync(path.join(__dirname,"client","config.txt")))
  if (fs.existsSync(path.join(__dirname, "client", "config.txt"))) {
    res.status(200).send("File Exist");
  } else {
    res.status(300).send("File Does not exit");
  }
});

app.listen(3000);
