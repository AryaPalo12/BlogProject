const {posts} = require('../database/models');

const createPost = async (title, image, body, user_id) => {
    return await posts.create( {
        title,
        image,
        body,
        user_id
    });
}

const getOnePost = async (id) => {
    return await posts.findOne({where:{id}, raw:true})
}

const getAllPost = async () => {
    return await posts.findAll();
}

const updatePost = async (id, title, image, body) => {
    return await posts.update(
        {
            title,
            image,
            body
        },
        {
            where: {
                id
            }
        }
    )
    
}

const postRepo = {
    createPost,
    getOnePost,
    getAllPost,
    updatePost
}

module.exports = postRepo;