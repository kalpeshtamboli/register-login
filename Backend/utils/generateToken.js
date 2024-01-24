const jwtToken = require("jsonwebtoken")

const generateToken = (id) => {

    return jwtToken.sign({id}, process.env.JWT_SECRET , {
        expiresIn  : '30d'
    })
}

module.exports = generateToken;