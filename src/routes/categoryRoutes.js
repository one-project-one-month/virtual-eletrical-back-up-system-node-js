import express from "express";
import { getAllCategory } from "../controller/CategoryController.js";

const router = express.Router();


router.get("/", getAllCategory);


export default router;