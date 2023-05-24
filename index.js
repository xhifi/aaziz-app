require("dotenv").config();
require("express-async-errors");
const express = require("express");

const errorHandler = require("./middlewares/errorHandler");
const notFound = require("./middlewares/notFound");

const app = express();
// app.use(bodyParser);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(require("helmet")());
app.use(require("cors")());
app.use(require("cookie-parser")());

app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/u", require("./routes/userRoutes"));
app.use("/api/v1/c", require("./routes/companiesRouter"));

app.use(errorHandler);
app.use(notFound);

require("./lib/initServer")(app, process.env.LISTEN_PORT);
