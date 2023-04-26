const ExtendedError = require("./ExtendedError");
const { StatusCodes } = require("http-status-codes");

class BadRequestError extends ExtendedError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.FORBIDDEN;
  }
}

module.exports = BadRequestError;
