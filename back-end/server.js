const mongoose = require("mongoose");
require("dotenv").config();
const app = require("./app");

const port = process.env.PORT;

(async (req, res) => {
  await mongoose.connect(process.env.Mongo_URL);
  console.log("Database connected successfully");
})();

app.listen(port, () => {
  console.log(`Server Running On Port ${port}`);
});
