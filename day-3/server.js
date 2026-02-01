const express = require("express")

const app = express() // instance of server

app.use(express.json()) // humara server req.body k data ko directly nahi padh skta vo itna capable nahi hota hai , isliye ye line likhni padti hai

const notes = []

app.post("/notes",(req,res) => { // method to create resources from the data recieved from frontend

    console.log(req.body)

    notes.push(req.body)

    res.send("node created")
})

app.get("/notes",(req,res)=>{ // method to retrive resource
    res.send(notes)
})



app.listen(3000,() =>{
    console.log("Server is Running on port 3000")
})