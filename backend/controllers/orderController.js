import asyncHandler from "../middleware/asyncHandler.js"
import Order from "../models/orderModel.js"

//@desc Create new order
//@route POST api/orders
// @access Private
const addOrderItems = asyncHandler(async (req, res) => {
  res.send("add order items")
})

//@desc get logged in user orders
//@route GET api/orders/myorders
// @access Private
const getMyOrders = asyncHandler(async (req, res) => {
  res.send("get my orders")
})

//@desc get order by id
//@route GET api/orders/:id
// @access Private
const getOrderById = asyncHandler(async (req, res) => {
  res.send("get order by id")
})

//@desc update order to paid
//@route GET api/orders/:id/pay
// @access Private
const updateOrderToPaid = asyncHandler(async (req, res) => {
  res.send("update order to paid")
})

//@desc update order to delivered
//@route GET api/orders/:id/deliver
// @access private/admin
const updateOrderTodeliverd = asyncHandler(async (req, res) => {
  res.send("update order to delivered")
})

//@desc get all orders
//@route GET api/orders
// @access Private/admin
const getOrders = asyncHandler(async (req, res) => {
  res.send("get all orders")
})

export {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderTodeliverd,
  getOrders,
}