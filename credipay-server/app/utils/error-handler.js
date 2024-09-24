
const ApiError = require('./ApiError');

function errorHandler(err, req, res, next) {
    if (err instanceof ApiError) {
        return res.status(err.statusCode).json({
            status: 'error',
            message: err.message
        });
    }

    console.error(err); // Log the error
    return res.status(500).json({
        status: 'error',
        message: 'Internal Server Error'
    });
}

module.exports = errorHandler;
