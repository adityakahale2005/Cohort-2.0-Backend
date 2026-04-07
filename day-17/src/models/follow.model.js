const mongoose = require("mongoose");

const followSchema = new mongoose.Schema({
    follower: {
        type: String,
    },

    followee: {
       type: String,
    },
status:{
       type: String,
       default: "pending",
       enum: {
        values: [ "pending", "accepted" , "rejected" ],
        message: "status can only be pending, accepted or rejected"
       }
}
},
    {
        timestamps: true // ye record kab create hua tha doc me,
                         // aur update hua tha ye batayega
    })

    followSchema.index({ follower: 1, followee: 1}, { unique: true }) // same record phirse create na ho iske liye 


const followModel = mongoose.model("follows",followSchema)

module.exports = followModel
