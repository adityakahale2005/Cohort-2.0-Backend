const postModel = require("../models/post.model")
const ImageKit = require("@imagekit/nodejs")
const { toFile } = require('@imagekit/nodejs')
const jwt = require('jsonwebtoken')
const identifyUser = require("../middlewares/auth.middleware")

const imagekit = new ImageKit({
    privateKey:process.env.IMAGEKIT_PRIVATE_KEY
})

async function createPostController(req,res) {
    console.log(req.body,req.file)

    // const token = req.cookies.token

    // if(!token){
    //     return res.status(401).json({
    //         message: "Token not provided,Unauthorized access."
    //     })
    // }

    
    // let decoded;
    // try {
    //      decoded = jwt.verify(token,process.env.JWT_SECRET)
    // } catch (err){
    //     return res.status(401).json({
    //         message: "user not authorized"
    //     })
    // }
    
    console.log(decoded)

    const file = await imagekit.files.upload({
        file: await toFile(Buffer.from(req.file.buffer),'file'),
        fileName: "Test"
    })

    const post = await postModel.create({
        caption: req.body.caption,
        imgUrl: file.url,
        user: req.user.id
    })

    res.status(201).json({
        message: "post created successfully.",
        post
    })
}

async function getPostController(req,res){
    console.log(req.body)

    // const token = req.cookies.token;

    // if(!token){
    //     return res.status(401).json({
    //         message:"Token not provided , Unauthorized access."
    //     })
    // }
    
    // let decoded;
    // try{
    //     decoded = jwt.verify(token,process.env.JWT_SECRET)
    // } catch(err){
    //     return res.status(401).json({
    //         message: "token invalid"
    //     })
    // }

    const userId = req.user.id

    const posts = await postModel.find({
        user: userId
    })

    res.status(200).json({
        message: "Post fetched successfully.",
        posts
    })

}

async function getPostdetailsController(req,res) {
    console.log(req.body)

    // const token = req.cookies.token;

    // if(!token){
    //     return res.status(401).json({
    //         message: "unauthorized access"
    //     })
    // }

    // let decoded;
    // try{
    //     decoded = jwt.verify(token,process.env.JWT_SECRET)
    // } catch(err){
    //     return res.status(401).json({
    //         message:" token invalid."
    //     })
    // }

    const userId = req.user.id
    const postId = req.params.postId

    const post = await postModel.findById({
        user: userId
    })

    if(!post){
        return res.status(404).json({
            message: "Post not found with the Id."
        })
    }

    const isValidUser = post.user.toString() === userId

    if(!isValidUser){
        return res.status(403).json({
            message: "forbidden content."
        })
    }

    return res.status(200).json({
        message: "Post fetched successfully",
        post
    })
}
   

module.exports = {
    createPostController,
    getPostController,
    getPostdetailsController
}

