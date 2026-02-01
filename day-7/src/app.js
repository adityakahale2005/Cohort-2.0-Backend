// work - server ko create krna


const express = require("express")
const noteModel = require("./models/notes.model")
const app = express()

app.use(express.json())

/*
- POST /notes
- req.body => {title,description}

*/

app.post("/notes",async (req,res) => {
    const {title,description} = req.body; // destrcuturing : title and des is extracted from req.body

    const note = await noteModel.create({
        title,description
    })

    res.status(201).json({
        message : "Note created successfully",
        note
    })
})

/*
- GET /notes
- fetch all the notes Data
*/
app.get("/notes", async (req,res) => {
    const note = await noteModel.find() // find method return data in array format

    res.status(200).json({
        message : "Notes fetched sucessfully",
        note
    })
})


module.exports = app