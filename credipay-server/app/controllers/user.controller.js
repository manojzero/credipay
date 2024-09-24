const userservice = require("../services/userservice.js")
const httpStatus = require('http-status');
const catchAsync = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch((err) => next(err));
};
const getAllUsersList = async (req, res) => {
  try {
    // console.log('returm',req)
    const result = await userservice.getusersList();
    res.status(httpStatus.OK).send(result);
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).send(error.message)
  }
};
const getUserId = async (req, res) => {
  try {
    console.log('req.body.id----------', req.params.id)
    const result = await userservice.getuserData(req.params.id);
    res.status(httpStatus.OK).send(result);
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).send(error.message)
  }
};
const createUser = catchAsync(async (req, res) => {
  try {
    console.log('req==============', req.body)
    const result = await userservice.createUser(req.body);
    res.status(httpStatus.OK).send({ result, message: "User Added Successfully" });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).send(error.message)
  }
});
const updateUser = catchAsync(async (req, res) => {
  try {
    console.log('req==============', req.params.id)
    console.log('req  body==============', req.body)
    const result = await userservice.updateUser(req.params.id, req.body);
    res.status(httpStatus.OK).send({ result, message: "User Updated Successfully" });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).send(error.message)
  }
});
const getuserbyId = catchAsync(async (req, res) => {
  try {
    console.log('req==============', req.params.id)
    console.log('req  body==============', req.cookies.CP_SE9894.token)
    const result = await userservice.getuserbyId(req.params.id);
    if (result) {
      res.status(httpStatus.OK).send({ result, message: "User found" });
    }
  } catch (error) {
    console.log('errorsssddd' + error)
    res.status(httpStatus.BAD_REQUEST).send(error.message)
  }
});

module.exports = {
  getAllUsersList,
  createUser,
  getUserId,
  updateUser,
  getuserbyId
}