const mongoose = require("mongoose")

const followSchema = new mongoose.Schema({
    follower: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required : [ true , "follower is required"]
    },

    followee: {
         type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required : [ true , "followee is required"]
    }
},
    {
        timestamps: true // ye record kab create hua tha doc me,
                         // aur update hua tha ye batayega
    })


const followModel = mongoose.model("follows",followSchema)

module.exports = followModel
