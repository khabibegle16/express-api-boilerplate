const app = require('express')
const v1_router = app.Router()
const {apiMiddleware1} = require("./modules/module")
v1_router.use(apiMiddleware1)
v1_router.all("/",(req,res)=>{
    res.send("api v1")
})

module.exports = {v1_router}