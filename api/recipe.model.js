const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

const RecipeSchema = new mongoose.Schema({
  title: String,
  description: String,
  instructions: String,
  image: String,
  year: String,
  // year: {
  //   type: String,
  //   required: true,
  // },
});

const Recipe = mongoose.model("Recipe", RecipeSchema);
