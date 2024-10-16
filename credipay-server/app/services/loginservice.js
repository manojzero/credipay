const db = require("../config/dbconfig");
const { Sequelize, QueryTypes } = require('sequelize');
const ApiError = require('../utils/ApiError')
const httpStatus = require('http-status');
const { tokenTypes } = require("../config/token_types");
const jwt = require("jsonwebtoken");
const moment = require("moment");
const OP = Sequelize.Op;
const config=require('../config/config');


const userLogin = async (dossier_no, debitor_no) => {
    try {
    console.log("User Login service====");
    const { debiteurs, dossiers, sequelize } = db;
    const dossier = await dossiers.findOne({
        where: {
            id: dossier_no
        },
        attributes: ['id','debiteur']
    });
    if (!dossier) {
        // throw new ApiError(httpStatus.UNAUTHORIZED, "Invalid dossier id");
        throw new ApiError(httpStatus.UNAUTHORIZED, "Invalid login credentials");
    }
    
    const debiteur = await debiteurs.findOne({
        where: {
            [OP.and]:[{ gestructureerdemededeling : debitor_no },{ id : dossier.debiteur }]
            
        },
        attributes: ['id', 'gestructureerdemededeling']
    });

    if (!debiteur) {
        // throw new ApiError(httpStatus.UNAUTHORIZED, "Invalid debiteur id");
        throw new ApiError(httpStatus.UNAUTHORIZED, "Invalid login credentials");
    }
    const result = {
        debiteur, dossier
    }


    // const query = "SELECT * FROM credisolv_dos.dossiers d INNER JOIN credisolv_dos.debiteurs k ON d.debiteur = k.id WHERE k.gestructureerdemededeling = :debitorNo AND d.id = :dossierNo";
    //         const query = `SELECT * FROM credisolv_dos.dossiers AS d INNER JOIN credisolv_dos.debiteurs AS k ON d.debiteur = k.id WHERE k.gestructureerdemededeling = : debitorNo AND d.id = : dossierNo`;
    //   const querys="SELECT * FROM dossiers";
    //         const result = await sequelize.query("SELECT * FROM dossiers", {
    //             // replacements: { debitorNo: debitor_no, dossierNo: dossier_no },
    //             // nest: tru/e,
    //             type: Sequelize.QueryTypes.SELECT
    //         });
    //         // console.log("TSES==========",await sequelize.query('SELECT * FROM credisolv_dos.dossiers AS d INNER JOIN credisolv_dos.debiteurs AS k ON d.debiteur = k.id WHERE k.gestructureerdemededeling = : debitorNo AND d.id = : dossierNo', { raw: true }));

    //         console.log("result=========", result);


    return result;
    } catch (error) {
        console.log("================", error);

        throw new ApiError(httpStatus.FORBIDDEN, "Invalid login credentials");
    }
};
const userLogout = async (accessToken) => {
    const { dossier_token } = db;

    const payload = jwt.verify(accessToken, config.jwtConfig.secret);

    let login_user_info = payload.sub;
    
    const refreshTokenDoc = await dossier_token.destroy({
        where: {
            dossier_id: login_user_info[0],
            type: tokenTypes.REFRESH,
            blacklisted: false,
        }
    });
    if (!refreshTokenDoc) {
        throw new ApiError(httpStatus.NOT_FOUND, "Token Not found");
    }
    return refreshTokenDoc;
   
};
const isPasswordMatch = async function (email, password) {
    const { users } = db
    const user = await users.findOne({
        where: {
            email: email
        }
    })
    let matchStatus = await bcrypt.compare(password, user.password)
    console.log('MATCH STATUS', matchStatus)
    return bcrypt.compare(password, user.password)
}

const generateAuthTokens = async (dossier_id) => {
    const accessTokenExpires = moment.utc(moment().add(1000, "minutes"));
    const accessToken = generateToken(
        dossier_id,
        accessTokenExpires,
        tokenTypes.ACCESS
    );

    await saveToken(dossier_id, accessTokenExpires, tokenTypes.ACCESS)
  

    return {
        token: accessToken,
        expires: accessTokenExpires.toDate(),
    };
};
const generateRefreshTokens = async (dossier_id) => {
    const accessTokenExpires = moment.utc(moment().add(15, "minutes"));
    const accessToken = generateToken(
        dossier_id,
        accessTokenExpires,
        tokenTypes.ACCESS
    );

    const refreshTokenExpires = moment().add(15, "minutes");
    const refreshToken = generateToken(
        dossier_id,
        refreshTokenExpires,
        tokenTypes.REFRESH
    );

    await saveToken(
        dossier_id,
        refreshTokenExpires,
        tokenTypes.REFRESH
    );

    return {
        access: {
            token: accessToken,
            expires: accessTokenExpires.toDate(),
        },
        refresh: {
            token: refreshToken,
            expires: refreshTokenExpires.toDate(),
        },
    };
};

const generateToken = (dossier_id, expires, type, secret = config.jwtConfig.secret) => {
    const payload = {
        sub: dossier_id,
        iat: moment().unix(),
        exp: expires.unix(),
        type,
    };
    return jwt.sign(payload, secret);
};

const saveToken = async (dossier_id, expires, type, blacklisted = false) => {
    const { dossier_token } = db;
    const tokenDoc = await dossier_token.create({
        dossier_id: dossier_id,
        expires: expires.toDate(),
        type,
        blacklisted,
    });
    return tokenDoc;
};

const logout = async (dossier_id) => {
    const { dossier_token } = db;
    const refreshTokenDoc = await dossier_token.destroy({
        where: {
            dossier_id: dossier_id,
            type: tokenTypes.REFRESH,
            blacklisted: false,
        }
    });
    return refreshTokenDoc;
}

module.exports = {
    userLogin,
    generateAuthTokens,
    generateToken,
    saveToken,
    userLogout,
    logout,
    generateRefreshTokens
}
