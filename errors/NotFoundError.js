const { StatusCodes } = require("http-status-codes");
const ExtendedError = require("./ExtendedError");

class NotFoundError extends ExtendedError {
  constructor(message) {
    super(message);
    this.StatusCode = StatusCodes.NOT_FOUND;
  }
}

module.exports = NotFoundError;
