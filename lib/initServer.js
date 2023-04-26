module.exports = (app, p) => {
  const port = parseInt(p);
  if (isNaN(port)) throw new Error("Port should be of type number");

  if (port) {
    app.listen(p, (err) => {
      if (err) {
        console.error(`Problem initializing the server:`, err);
        process.exit(-1);
      }
      console.log(`Server is now listening on port ${port}`);
    });
  }
};
