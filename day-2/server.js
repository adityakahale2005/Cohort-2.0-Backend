const express = require("express")

const app = express() // creating instance of server

app.get('/',(req,res) => { // user agar / pe req krega to hello world responce jayega
    res.send("Hello world")
}) // node server.js command likhne k baad agar ye code likha to cannot get hi dikhega localhost pe

app.get("/about",function(req,res){
    res.send("This is about page")
})

app.get("/home",function(req,res){
    res.send("This is home page")
})

app.get("/Mens",function(req,res){
    res.send("This is Mens page")
})





app.listen(3000)