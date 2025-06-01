import express from "express";
import {
  isSellerAuth,
  logout,
  sellerLogin,
  sellerLogout,
} from "../controllers/sellerController";
import authSeller from "../middlewares/authSeller.js";

const sellerRouter = express.Router();

sellerRouter.post("/login", sellerLogin);
sellerRouter.get("/is-auth", authSeller, isSellerAuth);
sellerRouter.get("/logout", sellerLogout);

export default sellerRouter;
