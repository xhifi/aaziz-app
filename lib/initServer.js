module.exports = (app, p) => {
  try {
    const port = parseInt(p);
    if (isNaN(port)) throw new Error("Port should be of type number");

    if (port) {
      app.listen(p, (err) => {
        if (err) {
          throw new Error(`Problem initializing the server:`, err);
        }
        console.log(`Server is now listening on port ${port}`);
      });
    }
  } catch (error) {
    console.error(error);
  }
};
