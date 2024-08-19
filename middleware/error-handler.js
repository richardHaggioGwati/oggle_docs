const { StatusCodes } = require('http-status-codes')

const errorHandlerMiddleware = (error, request, response, next) => {
    const customError = {
        statusCode: error.status || StatusCodes.INTERNAL_SERVER_ERROR,
        msg: error.message || 'Something went wrong try again later'
    }

    if (error.name === 'ValidationError') {
        customError.msg = Object.values(error.errors).map((item) => item.message).join(',')
        customError.statusCode = StatusCodes.BAD_REQUEST
    }
    if (error.code && error.code === 11000) {
        customError.msg = `Duplicate value entered for ${Object.keys(error.keyValue)} field, please choose another value`
        customError.statusCode = StatusCodes.BAD_REQUEST
    }
    if (error.name === "CastError") {
        customError.msg = `No item with id: ${error.value}`
        customError.statusCode = StatusCodes.NOT_FOUND
    }
    return response.status(customError.statusCode).json({msg: customError.msg})
}

module.exports = errorHandlerMiddleware