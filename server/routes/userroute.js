import express from "express";
import { createUser } from "../controller/usercntrl.js";
// import jwtCheck from "../config/auth0Config.js";
const router=express.Router()
router.post("/register",createUser)

export default router;