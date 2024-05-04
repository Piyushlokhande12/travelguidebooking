import express from "express";
import { createPlace, getPlace, getallPlace } from "../controller/placecntrl.js";
const router=express.Router()
router.post("/create",createPlace)
router.get("/allplace",getallPlace)
router.get("/:id",getPlace)
export default router;