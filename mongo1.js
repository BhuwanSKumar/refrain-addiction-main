require("dotenv").config();
const mongoose = require("mongoose");
mongoose.connect(`${process.env.MONGODB_URI}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected!");
});

const dataSchema = new mongoose.Schema({
  web_arr: {
    type: Array,
    items: {
      type: String,
    },
  },
});

const blockCollection = mongoose.model("blockCollection", dataSchema);

module.exports = blockCollection;
