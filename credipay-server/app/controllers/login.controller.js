
const userloginservice = require("../services/loginservice.js")
const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError')


const catchAsync = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch((err) => next(err));
};
const getUserLogin = async (req, res) => {
  try {
    const { userName, password } = req.body;
    let result = await userloginservice.userLogin(userName, password);
    if (result) {
      let tokens = await userloginservice.generateAuthTokens(result.dossier.id +"~"+result.debiteur.gestructureerdemededeling);
     
      let response = {
        dossier_id: result.dossier.id,
        debiteur: result.debiteur.gestructureerdemededeling,
      }
      if (tokens) {
 
        res.cookie(process.env.COOKIE_ID, tokens, {
          httpOnly: true,
          secure: process.env.NODE_ENV == "development" ? false : true,
          sameSite: process.env.NODE_ENV == "development" ? "strict" : "lax",
          path: "/"
        }).send({ response });

      }
    }
  } catch (error) {
    console.log("   awd" + error)
    // res.status(401).send({ message: error });
    res.status(httpStatus.UNAUTHORIZED).send({ message: error.message })
  }

};



const logout = async (req, res) => {
  var mes = "Successfully logged out"
  try {
  
    let result = await userloginservice.userLogout(req.cookies[process.env.COOKIE_ID].token);
   
    res
      .clearCookie(process.env.COOKIE_ID, {path: "/", sameSite: process.env.NODE_ENV == "development" ? "strict" : "lax", secure: process.env.NODE_ENV == "development" ? false : true})
      .status(httpStatus.OK)
      .send({ mes });
  } catch (error) {
    res
      .clearCookie(process.env.COOKIE_ID, {path: "/", sameSite: process.env.NODE_ENV == "development" ? "strict" : "lax", secure: process.env.NODE_ENV == "development" ? false : true})
      .status(httpStatus.OK)
      .send({ mes });
  }
}


const tokenRefresh = async (req, res) => {
  console.log('===111111=======', req.body.dossier_id, req.body.debiteur);

  let logout = await userloginservice.logout(req.body.dossier_id);
  let result = await userloginservice.userLogin(req.body.dossier_id, req.body.debiteur);
  if (result) {
    let tokens = await userloginservice.generateRefreshTokens(result.dossier.id);
    console.log("========", JSON.stringify(tokens));

    let response = {
      dossier_id: result.dossier.id,
      debiteur: result.debiteur.gestructureerdemededeling,
      finalToken: tokens.access.expires
    }
    if (tokens) {
      res.cookie("CP_SE9894", tokens.access, {
        httpOnly: true,
        secure: false, // Set to true in production with HTTPS
        sameSite: 'lax'
      }).send({ response });
    }
  }
}


module.exports = {
  getUserLogin,
  logout,
  tokenRefresh
}