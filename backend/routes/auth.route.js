import express from "express";

// when importing something from local file, we need .js at the end
import {
  login,
  logout,
  signup,
  refreshToken,
  getProfile,
} from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
const router = express.Router();

router.post("/signup", signup);
router.post("/logout", logout);
router.post("/login", login);
router.post("/refresh-token", refreshToken); // after 15m, we need to recreate new token, beause for exmaple users cant buy on store
router.get("/profile", protectRoute, getProfile);

export default router;
