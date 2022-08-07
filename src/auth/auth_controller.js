const authServices = require("./auth_services");

const userLogin = async(req,res) => {
    const {email,password} = req.body;
    try {
        const userToken = await authServices.userLogin(email,password);
        console.log(userToken);
        return res.setHeader('Authorization', `Bearer ${userToken}`).json(userToken)
    }
    catch{
        res.status(400).send('Bad Request')
    }
}

const authControllers = {
    userLogin,
}

module.exports = authControllers;