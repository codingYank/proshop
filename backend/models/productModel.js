import e from "express"
import mongoose from "mongoose"

const reviewSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      reqired: true,
      default: 0,
    },
    comment: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const productSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      reqired: true,
    },
    description: {
      type: String,
      reqired: true,
    },
    reviews: [reviewSchema],
    rating: {
      type: Number,
      reqired: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      reqired: true,
      default: 0,
    },
    price: {
      type: Number,
      reqired: true,
      default: 0,
    },
    countInStock: {
      type: Number,
      reqired: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
)

const Product = mongoose.model("Product", productSchema)

export default Product
