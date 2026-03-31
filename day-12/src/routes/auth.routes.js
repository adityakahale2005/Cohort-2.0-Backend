const express = require("express")
const userModel = require("../models/user.model")
const jwt = require("jsonwebtoken")
const authRouter = express.Router()

authRouter.post("/register" , async(req,res) => {
    const {name , email , password} = req.body // taking out data from req.body
    
    const isUserAlreadyExists = await userModel.findOne({ email }) // checking if user with same email already exists

    if(isUserAlreadyExists) {
        return res.status(400).json({
            message:"User already exists with this email address"
        })
    }
    const user = await userModel.create({  // creating user with it
        email , password , name
    })

    const token = jwt.sign(
       {
        id: user._id,
        email: user.email
       },
       process.env.JWT_SECRET
    )

    res.cookie("jwt_token",token)

    res.status(201).json({
        message: "user registered",  // sending response with status code
        user,
        token
    })

})



module.exports = authRouter