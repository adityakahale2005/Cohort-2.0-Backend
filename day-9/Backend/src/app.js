// work - to create server , to config server

const express = require("express")
const noteModel = require("./models/note.model")
const cors = require("cors")
const path = require("path")
const { log } = require("console")

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname,"..", "public")))



// POST /api/notes
// - create new note and save data in mongodb

app.post("/api/notes",async (req,res) => {
    const { title,description } = req.body

    const note = await noteModel.create({
        title , description
    })

    res.status(201).json({
        message : "note created successfully",
        note,
    })
})


// GET /api/notes
// Fetch all the data from momgodb and send them in the response

app.get("/api/notes",async (req,res) => {
    const notes = await noteModel.find()

    res.status(200).json({
        message:"notes fetched successfully",
        notes,
    })
})


// DELETE /api/notes/id
// Deletes the note with a particular id from req.params

app.delete("/api/notes/:id", async (req,res) => {
    const id = req.params.id
    
    await noteModel.findByIdAndDelete(id)

    res.status(200).json({
        message:"note deleted successfully"
    })
})


// PATCH /api/notes/:id
// - update the description of notes by id
// - req.body = {description}

app.patch("/api/notes/:id", async (req,res) => {
    const id = req.params.id
    const { description } = req.body

    await noteModel.findByIdAndUpdate(id, { description })

    res.status(200).json({
        message:"note description updated successfully"
    })
})

console.log(__dirname)

// wildcard route
// frontend fallback — EXPRESS 5 SAFE
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"))
})

module.exports = app