
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
      let tokens = await userloginservice.generateAuthTokens(result.dossier.id);
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
  } catch (error) {
    console.log("   awd" + error)
    // res.status(401).send({ message: error });
    res.status(httpStatus.UNAUTHORIZED).send({ message: error.message })
  }

  // try {
  // const { dossier_id, password } = req.body
  // console.log("req body=========", req.body);
  // let result = await userloginservice.userLogin(req.body.userName, req.body.password);
  // if (result) {
  //     let tokens = await userloginservice.generateAuthTokens(result.dossier.id);
  //     if (tokens) {
  //         console.log("------token--------", JSON.stringify(tokens));
  //         res.cookie("CP_SE9894", tokens.access, {
  //             httpOnly: true,
  //             // maxAge:90000,
  //             secure: process.env.NODE_ENV === 'development',
  //             sameSite: 'strict',
  //         }).send({ result });
  //         console.log("result", res);
  //         // if (result.dossier != null && result.debiteur != null && result != '') {
  //         //     res.status(httpStatus.OK).send({ result, message: "User Exist" });
  //         // }
  //         // else if (result.dossier == null) {
  //         //     res.status(httpStatus.NOT_FOUND).send({ message: "User Not found" })
  //         // }
  //         // else if (result.debiteur == null) {
  //         //     res.status(httpStatus.NOT_FOUND).send({ message: "Invalid Password" })
  //         // }
  //         // res.send(result);
  //     }
  // }
};



const logout = async (req, res) => {
  var mes = "Successfully logged out"
  try {

    // let result = await userloginservice.userLogout(req.params.dossier_id);
    let result = await userloginservice.userLogout(req.cookies.CP_SE9894.token);
    // res.sendStatus(httpStatus.OK).send(result);

    res
      .clearCookie("CP_SE9894")
      // .clearCookie("auth-token")
      .status(httpStatus.OK)
      .send({ mes });
  } catch (error) {
    res
      .clearCookie("CP_SE9894")
      // .clearCookie("auth-token")
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