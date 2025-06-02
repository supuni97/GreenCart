import Address from "../models/Address.js";

//add address : /api/address/add
export const addAddress = async (req, res) => {
  try {
    const { userId, address } = req.body;
    await Address.create({ ...address, userId });
    res.json({ success: true, message: "Address added" });
  } catch (error) {
    console.log(error.massage);
    res.json({ success: false, message: error.message });
  }
};

//get address: /api/address/list
export const getAddress = async (req, res) => {
  try {
    const { userId } = req.body;
    const addresses = await Address.find({ userId });
    res.json({ success: true, addresses });
  } catch (error) {
    console.log(error.massage);
    res.json({ success: false, message: error.message });
  }
};
