const moment = require("moment");
const jwt = require('jsonwebtoken');
const ApiError = require("../utils/ApiError");
const httpStatus = require('http-status');
const dotenv = require("dotenv");
dotenv.config();

const auth = async (req, res, next) => {
    try {
        console.log("loggerree", req)
        const authHeader = req.headers['authorization'];
        // const token = authHeader && authHeader.split(' ')[1];
        if (req.cookies.CP_SE9894?.token) {
            const payload = jwt.verify(req.cookies.CP_SE9894.token, process.env.SECRETKEY,
                (err, decodedToken) => {
                    console.log("decodedToken0,", decodedToken)
                    console.log("err,", err)
                    if (err) {
                        return res.status(401).json({ message: "Unauthorized" })
                    } else if (decodedToken) {
                        next()
                    }else{
                        return res.status(401).json({ message: "Unauthorized- something went wrong" })
                    }
                })
        } else {
            return res
                .status(401)
                .json({ message: "Unauthorized, token not available" })
        }
        // req.user = result.data;
    } catch (error) {
        throw new ApiError(httpStatus.BAD_REQUEST, error);
    }

}

module.exports = auth;