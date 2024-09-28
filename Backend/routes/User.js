import express from "express";
import { login, logout, register,  } from "../controllers/user.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
 
const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login,isAuthenticated);
router.route("/logout").get(logout);


export default router;
