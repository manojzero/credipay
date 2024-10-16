const userservice = require("../services/userservice.js")
const httpStatus = require('http-status');


const updateUser = async (req, res) => {
  try {
  
    const result = await userservice.updateUser(req.params.id, req.body);
    res.status(httpStatus.OK).send({ result, message: "User Updated Successfully" });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).send(error.message)
  }
};

const getuserbyId = async (req, res) => {
  try {
    
     const result = await userservice.getuserbyId(req.user?.dossier_id, req.user?.gestructureerdemededeling);
    if (result) {
      res.status(httpStatus.OK).send({ result, message: "User found" });
    }
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).send(error.message)
  }
};

module.exports = {
  updateUser,
  getuserbyId
}