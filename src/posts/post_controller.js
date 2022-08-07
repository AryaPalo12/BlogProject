const postServices = require("./post_services");
const jwt = require('jsonwebtoken');

const getPost = async (req,res) => {
    const params = req.params
    try {
        if(params.postId != undefined){
            const postfound = await postServices.getOnePost(params.postId);
            return res.json(postfound)
        } else {
            const allpost =  await postServices.getAllPost();
            return res.json(allpost);
        }
    }
    catch(error){
        res.status(404).send('Post not found')
    }
}

const createPost = async (req,res) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1]
    const { id } = jwt.decode(token)
    const { title, image, body } = req.body
    try {
        const createdPost = await postServices.createPost( title, image, body, id)
        return res.json(createdPost)
    }
    catch(error)
    {
        console.log(error)
        res.status(400).send('Bad Request')
    }

}

const updatePost = async(req,res) => {
    const postId = req.params.postId;
    const { title, image, body } = req.body
    try {
        const changedPost = await postServices.updatePost (postId, title, image, body);
        return res.status(200).json(changedPost);
    }
    catch
    {
        res.status(400).send('Bad Request')
    }
    
}

const postControllers = {
    getPost,
    createPost,
    updatePost
}

module.exports = postControllers;