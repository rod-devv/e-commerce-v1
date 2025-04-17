import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      min: 0,
      required: true,
    },
    image: {
      type: String,
      required: [true, "Image is required"],
    },
    category: {
      type: String,
      required: true,
    },
    isFeatured: {
      // if product is shown on featured slider
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// in mongodb database, collection is called "products", its automatic by mongoose
const Product = mongoose.model("Product", productSchema);

export default Product;
