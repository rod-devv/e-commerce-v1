import express from "express";
// import {

// } from "../controllers/cart.controller.js";

import { adminRoute, protectRoute } from "../middleware/auth.middleware.js";
import {
  addToCart,
  getCartProducts,
  removeAllFromCart,
  updateQuantity,
} from "../controllers/cart.cotroller.js";
const router = express.Router();

router.get("/", protectRoute, getCartProducts);

// only protectRoute because regualr customer can add to cart
router.post("/", protectRoute, addToCart);
router.delete("/", protectRoute, removeAllFromCart);
router.put("/:id", protectRoute, updateQuantity);

export default router;
