const { tokenVerify } = require("../utils/handleJWT");

const isAuth = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      let error = new Error("No token provided");
      error.status = 403;
      return next(error);
    }
    const token = req.headers.authorization.split(" ").pop();
    const isValidToken = await tokenVerify(token);
    if (isValidToken instanceof Error) {
      console.log("entré en check de validToken");
      error.message = "Token invalid";
      error.status = 403;
      return next(error);
    }
    req.token = isValidToken;
    next();
  } catch (error) {
    console.log("salí por el catch");
    error.message = "Internal Server Error";
    return next(error);
  }
};

module.exports = isAuth;
