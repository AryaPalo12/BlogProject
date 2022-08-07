require('dotenv').config();
const jwt = require('jsonwebtoken');

const verifyToken = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];
    if(!token){
        return res.send('Authorization is missing')
    }

    try{
        const user = await jwt.verify(token,process.env.JWT_TOKEN);
        req.auth = user;//add new property to request
        next();//if pass will go to next function
    } catch(error) {
        return res.status(401).json({message: 'Invalid Token'})

    }

}

module.exports = verifyToken