// work - 1. server ko start krna 
// 2. server ko db se connect krna


const app = require('./src/app');
const mongoose = require("mongoose")

function connectToDb(){
    mongoose.connect("mongodb+srv://adityakahale185_db_user:mtEsVgDKmZ042T8J@cluster0.vup6i2u.mongodb.net/day-6")
    .then(() => {
        console.log("Connect to Database")
    })
}

connectToDb()



app.listen(3000,() => {
    console.log("Server is running");
})
