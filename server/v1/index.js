const app = require('express')
const v1_router = app.Router()

v1_router.all("/",(req,res)=>{
    res.send("api v1")
})

module.exports = {v1_router}