const { StatusCodes } = require("http-status-codes");
const Status = StatusCodes;

const errorHandler = (err, req, res, next) => {
  console.log(err);

  const defaultError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || "Something went wrong on the server",
  };

  if (err.code === "22P02") {
    defaultError.statusCode = Status.BAD_REQUEST;
    defaultError.msg = "Wrong format for provided id";
  }

  // If Validation error occurs while writing on the database, send a response with bad request
  // if (err.name === "ValidationError") {
  //   defaultError.statusCode = Status.BAD_REQUEST;
  //   defaultError.msg = Object.values(err.errors)
  //     .map((item) => item.message)
  //     .join(", ");
  // }

  //If duplicate code exists in error when writing to database, return bad request response.
  // if (err.code && err.code === 11000) {
  //   defaultError.statusCode = Status.BAD_REQUEST;
  //   defaultError.msg = `${Object.keys(err.keyValue)} field needs to be unique`;
  // }

  // res.status(defaultError.statusCode).json({ msg: err });
  res.status(defaultError.statusCode).json({ msg: defaultError.msg });
};

module.exports = errorHandler;
