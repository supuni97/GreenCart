import jwt from "jsonwebtoken";

const authUser = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    res.json({ success: false, message: "Not authorized" });

    try {
      const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
      if (tokenDecode.id) {
        req.body.userId = tokenDecode.id;
      } else {
        res.json({ success: false, message: "Not authorized" });
      }
      next();
    } catch (error) {
      res.json({ success: false, message: error.message });
    }
  }
};

export default authUser;
