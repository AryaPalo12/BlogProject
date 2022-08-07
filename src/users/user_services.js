const userRepo = require("./user_repo");
const bcrypt = require('bcrypt');
const salt = 10

const userRegister = async (fullname,email,password) => {
    const hashedPassword = await bcrypt.hash(password,salt);
    return await userRepo.userRegister({fullname, email, password:hashedPassword})
}

const userServices = {
    userRegister,
}

module.exports = userServices;
