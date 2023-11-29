// const { query } = require("express-validator");
// const {addNewRecordIdempotancy} = require("./modules")
// import {addNewRecordIdempotancy} from "./modules.js"
var idempotency_local_storage = [];

// app.get("/idempotancy_check", (req, res) => {
//     // console.log("called",path.join(__dirname,"config.txt"),fs.existsSync(path.join(__dirname,"client","config.txt")))
//     if (fs.existsSync(path.join(__dirname, "client", "config.txt"))) {
//       res.status(200).send("File Exist");
//     } else {
//       res.status(300).send("File Does not exit");
//     }
//   });
const apiMiddleware1 = (req, res, next) => {
  // your-middleware-logic
  // console.log(req);

  if (req.headers["idempotency-key"]) {
   // console.log(idempotency_local_storage.indexOf(req.headers["idempotency-key"]))
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

module.exports ={apiMiddleware1}
// app.use(apiMiddleware1);
// app.use(apiMiddleware1);