import asyncHandler from "../middleware/asyncHandler.js"
import Product from "../models/productModel.js"

//@desc fetches all products
//@route GET /api/products
// @access Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({})
  res.json(products)
})

//@desc fetches a product
//@route GET /api/products/:id
// @access Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)

  if (product) {
    return res.json(product)
  } else {
    throw new Error("Resource not found")
  }
})

//@desc create a product
//@route POST /api/products
// @access private admin
const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: "Sample Name",
    price: 0,
    user: req.user._id,
    image: "/images/sample.jpg",
    brand: "Sample Brand",
    category: "Sample Category",
    countInStock: 0,
    numReviews: 0,
    description: "Sample Description",
  })

  const createdProduct = await product.save()
  res.status(201).json(createdProduct)
})

export { getProducts, getProductById, createProduct }
