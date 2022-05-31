const jwt = require('jsonwebtoken');
const secretCode = process.env.SECRET_CODE || 'rahasia';

const tokenGenerator = (data) => {
    const {} = data 
    return jwt.sign({
       
    },secretCode)
}

const tokenVerifier = (data) => {
    return jwt.verify(data, secretCode)

}

module.exports = {
    tokenGenerator,tokenVerifier
}