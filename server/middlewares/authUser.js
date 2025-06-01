import jwt from "jsonwebtoken";

// const authUser = async (req, res, next) => {
//   const { token } = req.cookies;

//   if (!token) {
//     return res.json({ success: false, message: "Not authorized" });
//   }

//   try {
//     const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

//     if (tokenDecode.id) {
//       req.body.userId = tokenDecode.id;
//     } else {
//       return res.json({ success: false, message: "Invalid token" });
//     }
//     next();
//   } catch (error) {
//     return res.json({ success: false, message: "Token verification failed" });
//   }
// };

const authUser = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res.json({ success: false, message: "Not authorized" });
  }

  try {
    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

    if (tokenDecode.id) {
      req.user = { id: tokenDecode.id }; // ✅ FIX HERE
      next();
    } else {
      return res.json({ success: false, message: "Invalid token" });
    }
  } catch (error) {
    return res.json({ success: false, message: "Token verification failed" });
  }
};

export default authUser;
