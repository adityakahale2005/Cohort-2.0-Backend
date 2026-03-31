const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        unique : [true,"Username already exists" ],
        required : [true , "Username is required"]
    },
    email : {
        type:String,
        unique : [true,"email already exists"],
        required : [true,"email is required"]
    },
    password : {
        type : String,
        required : [true,"password is required"]
    },
    bio: String,
    profileImage: {
        type: String,
        default : "https://ik.imagekit.io/fgqjco1li/default-avatar-profile-social-media-260nw-1920331226.webp"
    }
})

const userModel = mongoose.model("users",userSchema)

module.exports = userModel