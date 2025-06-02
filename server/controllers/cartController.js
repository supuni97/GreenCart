import User from "../models/User.js";

//update cart : /api/cart/update
export const updateCart = async (req, res) => {
  try {
    const { userId, cartItems } = req.body;
    await User.findByIdAndDelete(userId, { cartItems });
    res.json({ success: true, message: "cart updated" });
  } catch (error) {
    console.log(error.massage);
    res.json({ success: false, message: error.message });
  }
};
