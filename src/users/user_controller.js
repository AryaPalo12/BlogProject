const userServices = require('./user_services');

const userRegister = async (req,res) => {
    const {fullname,email,password} = req.body;
    try {
        const createUser =  await userServices.userRegister(fullname,email,password);
        return res.json(createUser)
    }
    catch{
        res.status(400).send('Bad Request')
    }
}

const userControllers = {
    userRegister,
}

module.exports = userControllers;