// work of app.js - server ko create krna , 2 server ko config krna

const express = require("express")

const app = express()

app.use(express.json()); // middleware

const notes = []

// POST /notes 
app.post("/notes",(req,res) => {
    // console.log(req.body);

    notes.push(req.body)

    res.status(201).json({
        message:"note created successfully"
    })
    // res.send("note created")  
})

// GET /notes 
app.get("/notes",(req,res) => {
    res.status(200).json({
        notes : notes
    })
})

// DELETE /notes/:index 
app.delete("/notes/:mama",(req,res) => {
    delete notes[ req.params.mama ]

    res.status(204).json({
       message:"note deleted sucessfully"
    })
})


// PATCH /notes/:index 

app.patch("/notes/:index",(req,res) => {
    notes [req.params.index].description = req.body.description

    res.status(200).json({
        message:"note updates successfully"
    })
})









module.exports = app