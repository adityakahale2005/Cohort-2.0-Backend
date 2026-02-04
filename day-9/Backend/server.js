// work - to start the server , to conect db

require('dotenv').config()
const app = require("./src/app")
const connectToDb = require("./src/config/database")


connectToDb()


app.listen(3000,() => {
    console.log("server is running at http://localhost:3000");
})