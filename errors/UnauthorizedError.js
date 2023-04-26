const { StatusCodes } = require("http-status-codes");
const ExtendedError = require("./ExtendedError");

class UnauthorizedError extends ExtendedError {
  constructor(message) {
    super(message);
    this.StatusCode = StatusCodes.UNAUTHORIZED;
  }
}

module.exports = UnauthorizedError;
