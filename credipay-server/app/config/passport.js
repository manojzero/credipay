const httpStatus = require('http-status');
const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
const ApiError = require("../utils/ApiError");

const { tokenTypes } = require('./token_types');

const userService = require('../services/userservice');

const cookieExtractor = function(req) {
    var token = null;   
      console.log("cookie-", req.cookies[process.env.COOKIE_ID].token);
    if(!req.cookies[process.env.COOKIE_ID]){
      throw new  ApiError(httpStatus.UNAUTHORIZED, "Authentication Error")
    }
    
    if (req && req.cookies && req.cookies[process.env.COOKIE_ID].token){
      token = req.cookies[process.env.COOKIE_ID].token;
      console.log("token",token);
    } 
    else {
      return null;
    }
    
    return token;
  };

const jwtOptions = {
  secretOrKey: process.env.JWT_SECRET,
  jwtFromRequest: cookieExtractor,
};

const jwtVerify = async (payload, done) => {
console.log("PASSPORTJSJWTVERIFY", payload)

  try {    
    if (payload.type !== tokenTypes.ACCESS) {
      throw new Error('Invalid token type');
    }
    // const {AdminUser} = await db();
    // const user = await AdminUser.find(payload.sub);

    console.log("PASSPORTJSJWTVERIFY", payload)
    let login_info = payload.sub?.split('~');
    // const user = await userService.getuserbyId(login_info[0], login_info[1]);

    const user = {
      "dossier_id": login_info[0],
      "gestructureerdemededeling": login_info[1]
    }
     
    done(null, user);
  } catch (error) {
    done(error, false);
  }
};

const jwtStrategy = new JwtStrategy(jwtOptions, jwtVerify);

module.exports = {
  jwtStrategy,
};
