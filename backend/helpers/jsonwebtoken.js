const jwt = require('jsonwebtoken');
const secretWord = process.env.SECRET_WORD || 'rahasia';

const tokenGenerator = (data) => {
    const {
        user_name, 
        user_email, 
        user_salt, 
        user_birthdate, 
        user_gender, 
        user_type
    } = data;
    return jwt.sign( {
        user_name, 
        user_email,  
        user_salt, 
        user_birthdate, 
        user_gender, 
        user_type
    }, secretWord)
}

const tokenVerifier = (data) => {
    return jwt.verify(data, secretWord)
}

module.exports = {
    tokenGenerator, tokenVerifier
}