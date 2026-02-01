// Schema work - Database ko batana ki data kis format me store hone wala hai , uske bina db data store nhi krta

const mongoose = require("mongoose")


const noteSchema = new mongoose.Schema({
    title: String,
    description: String,
})



const noteModel = mongoose.model("notes",noteSchema) // ek collection hogi notes jiske andar hum saare note ka data rakhna hai


module.exports = noteModel