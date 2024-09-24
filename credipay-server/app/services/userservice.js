const db = require("../config/dbconfig");
const Sequelize = require('sequelize');
const ApiError = require('../utils/ApiError');
const httpStatus = require("http-status");
const getusersList = async () => {
    try {
        const { debiteurs } = db;
        const resultlist = await debiteurs.findAll({limit:100})
        // console.log("reutt", resultlist)
        return resultlist;
    } catch (error) {
        throw error
    }
};
const getuserData = async (id) => {
    try {
        const { users } = db;
        const resultlist = await users.findAll({
            where: {
                id: id
            }
        })
        console.log("reutt", resultlist)
        return resultlist;
    } catch (error) {
        throw error
    }
};
const updateUser = async (id, body) => {
    try {
        const { debiteurs } = db;
        console.log("body"+JSON.stringify(body))
        const resultlist = await debiteurs.update(body, {
            where: {
                id: id
            }
        })
        console.log("reutt", resultlist)
        return resultlist;
    } catch (error) {
        console.log("error" + error)
        throw new ApiError(httpStatus.BAD_REQUEST, error);
    }
};
const getuserbyId = async (dossier_no) => {
    try {
        const { dossiers, debiteurs } = db;
        console.log("dossier_no" + dossier_no)
        const dossier = await dossiers.findOne({
            where: {
                id: dossier_no
            },
            attributes: ['id', 'debiteur']
        });
        console.log("dossier" + dossier);
        const debiteur = await debiteurs.findOne({
            where: {
                id: dossier.debiteur
            },
            // attributes:['id','klant']
        });
        console.log("debiteur" + debiteur);
        // console.log("reutt", resultlist)
        return debiteur;
    } catch (error) {
        console.log("uio",error)
        throw new ApiError(httpStatus.BAD_REQUEST, error);
    }
};
const createUser = async (reqBody) => {
    console.log('reqBody', reqBody)
    try {
        // let reqBody={
        //     "title": "Dr",
        //     "first_name": "suraya",
        //     "last_name": "Prakash",
        //     "email": "surya@zot.app",
        //     "password": "Surya24#"
        // }
        const { users } = db;
        const resultlist = await users.create(reqBody)
        console.log("reutt", resultlist)
        return resultlist;
    } catch (error) {
        console.log('error', error)
        throw error
    }
};

module.exports = {
    getusersList,
    createUser,
    getuserData,
    updateUser,
    getuserbyId
}
