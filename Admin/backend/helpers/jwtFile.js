const jwt = require("jsonwebtoken");

const secretCode = process.env.SECRET_CODE || "test";

const getJwt = (data) => {
  const {
    id,
    user_name,
    user_email,

    user_salt,
    user_birthdate,
    user_gender,
    user_avatar,
    user_type,
  } = data;
  return jwt.sign(
    {
      id,
      user_name,
      user_email,

      user_salt,
      user_birthdate,
      user_gender,
      user_avatar,
      user_type,
    },
    secretCode,
    {
      expiresIn: "1h",
    }
  );
};

const getVerification = (data) => {
  return jwt.verify(data, secretCode);
};

module.exports = { getJwt, getVerification };
