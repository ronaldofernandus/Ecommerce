const jwt = require("jsonwebtoken");

const secretCode = process.env.SECRET_CODE || "test";

const getJwt = (data) => {
  const { id, profile, email, username, nama } = data;
  return jwt.sign({ id, profile, email, username, nama }, secretCode, {
    expiresIn: "1h",
  });
};

const getVerification = (data) => {
  return jwt.verify(data, secretCode);
};

module.exports = { getJwt, getVerification };
