const app = require('express')
const v2_router = app.Router()

v2_router.all("/",(req,res)=>{
    res.send("api v2")
})

module.exports = {v2_router}