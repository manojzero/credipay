class ApiError extends Error {
    constructor(statusCode, message, isOperational = true, stack = '') {
      console.log("ERROR MESSAGE = = ",message);
      console.log("StatusCode==",statusCode);
      super(message);
      this.statusCode = statusCode;
      this.isOperational = isOperational;
      this.response = message;
      if (stack) {
        this.stack = stack;
      } else {
        Error.captureStackTrace(this, this.constructor);
      }
    }
  }
  
  module.exports = ApiError;
  