const {User} = require('../database/models')

const userRegister = async ({ fullname, email, password}) => {
    console.log({ fullname, email, password})
    const oldUser = await User.findOne({
        where: {email}, raw:true
    });
    if(oldUser){
        console.log("User has been recorded before")
        return ({message : "Email has been used before"})
    }
    else {
        return await User.create( {
            fullname,
            email,
            password
    });
    }
}

const userRepo = {
    userRegister,
}

module.exports = userRepo;