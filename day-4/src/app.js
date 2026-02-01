// work : 1.server create krna , 2.server ko config krna

const express = require("express")

const app = express()

app.use(express.json()) //middleware to read req.body

const notes = [
    // {
    //     title:"test title 1",
    //     description: "test description 1"
    // }


]

app.get("/",(req,res)=>{
    res.send("hello world")
})

/*
POST /notes
*/
app.post("/notes",(req,res) => {
    console.log(req.body)
    notes.push(req.body)

    console.log(notes)

    res.send("note created")
})

/* Get /notes */

app.get("/notes", (req,res) => {
    res.send(notes)
})

// DELETE /notes //
// params 
// delete/notes/3 // 3 is index of node to be deleted
app.delete("/notes/:index",(req,res) => {
   delete notes[ req.params.index ]

   res.send("notes deleted successfully")
})

// PATCH /notes/:index
// req.body = {description :- "sample modified description."}

app.patch("/notes/:index", (req,res) => {
    notes[ req.params.index ].description = req.body.description
    notes[ req.params.index].title = req.body.title

    res.send("notes updates successfully")
})





module.exports = app