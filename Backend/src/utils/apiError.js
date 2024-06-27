class ApiError extends Error {
    constructor(
        statusCode,
        message= "Something went wrong",
        errors = [],
        stack = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false;
        this.errors = errors

        if (stack) {
            this.stack = stack
        } else{
            Error.captureStackTrace(this, this.constructor)
        }

    }
}
//Your ApiError class is a custom error class in JavaScript (or TypeScript) that extends the built-in Error class to provide additional properties and default values. This custom error class can be used to handle API errors in a more structured and consistent manner.

export {ApiError}