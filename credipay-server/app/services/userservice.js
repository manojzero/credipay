const db = require("../config/dbconfig");
const Sequelize = require('sequelize');
const ApiError = require('../utils/ApiError');
const httpStatus = require("http-status");
const OP = Sequelize.Op;

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
const getuserbyId = async (dossier_no, debitor_no) => {
    try {
        const { dossiers, debiteurs } = db;
       
        const dossier = await dossiers.findOne({
            where: {
                id: dossier_no
            },
            attributes: ['id', 'debiteur']
        });
       
        const debiteur = await debiteurs.findOne({
            where: {
                [OP.and]:[{ gestructureerdemededeling : debitor_no },{ id : dossier.debiteur }]
            },
            
        });
      
        return debiteur;
    } catch (error) {
        throw new ApiError(httpStatus.BAD_REQUEST, error);
    }
};



module.exports = {
 
    updateUser,
    getuserbyId
}
