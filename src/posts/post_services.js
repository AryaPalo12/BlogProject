const postRepo = require("./post_repo");

const createPost = async (title, image, body, user_id) =>{
    return await postRepo.createPost(title,image,body,user_id);
}

const getOnePost = async (id) => {
    return await postRepo.getOnePost(id)
}

const getAllPost = async () => {
    return await postRepo.getAllPost();
}

const updatePost = async(id, title, image, body) => {
    return await postRepo.updatePost(id, title, image, body);
}

const postServices = {
    createPost,
    getOnePost,
    getAllPost,
    updatePost
    
}

module.exports = postServices;
