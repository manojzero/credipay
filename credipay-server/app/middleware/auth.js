const passport = require("passport");
const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");
require("./../config/passport");

const verifyCallback =
  (req, resolve, reject, type) => async (err, user, info) => {

    if (err || info || !user) {
      return reject(
        new ApiError(httpStatus.UNAUTHORIZED, "Authentication error")
      );
    }

    req.user = user;

    resolve();
  };

const auth = 
  async (req, res, next) => {
    return new Promise((resolve, reject) => {
      passport.authenticate(
        "jwt",
        { session: false },
        verifyCallback(req, resolve, reject)
      )(req, res, next);
    })
      .then(() => next())
      .catch((err) => {
        if(err.statusCode == 401){
          res.clearCookie(process.env.COOKIE_ID, {path: "/", sameSite: "none", secure: true});
        }
        next(err)
      });
  };

module.exports = auth;
