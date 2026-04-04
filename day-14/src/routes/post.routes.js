const express = require("express")
const postRouter = express.Router()
const postController = require("../controllers/post.controller")
const multer = require("multer")
const upload = multer({ storage:multer.memoryStorage() })
const identifyUser = require("../middlewares/auth.middleware")

/*
* POST /api/posts [protected]
* - req.body = { caption,image-file}
*/

/* /api/posts */

postRouter.post("/",upload.single("image"), identifyUser ,postController.createPostController)

/*
* GET /api/posts/ [protected]
*/

postRouter.get("/", identifyUser ,postController.getPostController)

/*
* GET /api/posts/details/:postId
* - return details about specific post with the id, also verifies whether the post
    belongs to that respective user who's requesting.
*/

postRouter.get("/details:postId", identifyUser ,postController.getPostdetailsController)

module.exports = postRouter