const app = require("./app");

const port = 2300;
app.listen(port, () => {
  console.log(`Mini Message Board is listening at port: ${port}`);
});
