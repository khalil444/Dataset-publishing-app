const { model, Schema } = require("../connection")
const myschema = new Schema({
  title: String,
  name: String,
  date: String,
  usability: String,
  content: String,
  description: String,
  image: String,
  file: String,
})
module.exports = model("dataset", myschema)
