const mongoose = require("mongoose");
const config = require("./config");

mongoose.connect("mongodb+srv://aclcluster:141178NayviSQ@aclcluster.l7c77a8.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
  console.log("[✅ DataBase] Connected!");
});
module.exports = mongoose;
