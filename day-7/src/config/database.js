

const mongoose = require("mongoose")

function connectToDb(){
    mongoose.connect(process.env.MONGO_URI)
    .then(() =>{
        console.log("connectd to db")
    })
}

connectToDb()


module.exports = connectToDb


