const authRepo = require("./auth_repo");

const userLogin = async (email,password) => {
    try{
        return await authRepo.userLogin({ email, password});
    }
    catch (error) {
        return ("Bad request")
    }
    
}

const authServices = {
    userLogin,
}

module.exports = authServices;
