const express = require("express")
const postRouter = express.Router()
const postController = require("../controllers/post.controller")
const multer = require("multer")
const upload = multer({ storage:multer.memoryStorage() })
const identifyUser = require("../middlewares/auth.middleware")

/*
* @routes POST /api/posts [protected]
* @description
*/

/* /api/posts */

postRouter.post("/",upload.single("image"), identifyUser ,postController.createPostController)

/*
*@routes GET /api/posts/ [protected]
 @description return an detail about specific post with id , also check whether post belongs to that user whos requesting
*/

postRouter.get("/", identifyUser ,postController.getPostController)

/*
*@route GET /api/posts/details/:postId
* -@description -  return details about specific post with the id, also verifies whether the post
    belongs to that respective user who's requesting.
*/

postRouter.post("/like/:postId", identifyUser ,postController.likePostController)

module.exports = postRouter