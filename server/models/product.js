const mongoose = require("mongoose");
const ratingScheme = require("./rating");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  images: [
    {
      type: String,
      required: true,
    },
  ],
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  ratings: [ratingScheme],
});

const Product = mongoose.model("Product", productSchema);
module.exports = { productSchema, Product };

// module.exports = Product = mongoose.model("Product", productSchema);
