var express = require("express")
var http = require("http")
const fs= require('fs')
const path = require('path')
var app = express() 


const parse1 = (req,res,next)=>{
// console.log(req)
next()
}
app.use(parse1)
app.get("/",(req,res)=>{
    console.log("called",path.join(__dirname,"config.txt"),fs.existsSync(path.join(__dirname,"client","config.txt")))
    if(fs.existsSync(path.join(__dirname,"client","config.txt"))){
        res.status(200).send("File Exist")
    }else{
        res.status(300).send("File Does not exit")
    }

})

app.listen(3000)