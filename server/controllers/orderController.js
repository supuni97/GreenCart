import Order from "../models/Order.js";
import Product from "../models/Product.js";

//place order COD: /api/order/cod
export const placeOrderCOD = async (req, res) => {
  try {
    const { userId, address, items } = req.body;
    if (!address || items.length === 0) {
      res.json({ success: false, message: "Invalid data" });
    }
    //calculate amount
    let amount = await items.reduce(async (acc, item) => {
      const product = await Product.findById(item.product);
      return (await acc) + product.offerPrice * item.quantity;
    }, 0);

    //add tax 2%
    amount += Math.floor(amount * 0.02);

    await Order.create({
      userId,
      items,
      amount,
      address,
      paymentType: "COD",
    });
    res.json({ success: true, message: "Order placed successfully" });
  } catch (error) {
    console.log(error.massage);
    res.json({ success: false, message: error.message });
  }
};

//get order details of single user : /api/order/user
export const getUserOrders = async (req, res) => {
  try {
    const { userId } = req.body;
    const orders = await Order.find({
      userId,
      $or: [{ paymentType: "COD" }, { isPaid: true }],
    })
      .populate("items.product address")
      .sort({ createdAt: -1 });

    res.json({ success: true, orders });
  } catch (error) {
    console.log(error.massage);
    res.json({ success: false, message: error.message });
  }
};

//get all orders for seller : /api/order/seller
export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({
      userId,
      $or: [{ paymentType: "COD" }, { isPaid: true }],
    }).populate("items.product address");

    res.json({ success: true, orders });
  } catch (error) {
    console.log(error.massage);
    res.json({ success: false, message: error.message });
  }
};
