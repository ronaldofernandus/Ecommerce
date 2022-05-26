const jwt = require('jsonwebtoken');
const secretCode = process.env.SECRET_CODE || 'rahasia';

const tokenGenerator = (data) => {
    const {} = data 
    return jwt.sign({
        user_name,user_email,user_salt,user_birthdate,user_gender,user_type
    },secretCode)
}

const tokenVerifier = (data) => {
    return jwt.verify(data, secretCode)

}

module.exports = {
    tokenGenerator,tokenVerifier
}