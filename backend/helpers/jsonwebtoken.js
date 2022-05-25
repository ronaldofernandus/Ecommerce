const jwt = require('jsonwebtoken');
const secretWord = process.env.SECRET_WORD || 'rahasia';

const tokenGenerator = (data) => {
    const {} = data;
    return jwt.sign( {}, secretWord)
}

const tokenVerifier = (data) => {
    return jwt.verify(data, secretWord)
}

module.exports = {
    tokenGenerator, tokenVerifier
}