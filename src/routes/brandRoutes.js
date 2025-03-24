import express from "express";
import {
  createBrand,
  deleteBrandById,
  getAllBrands,
  getBrandById,
  updateBrandById,
} from "../controller/BrandController.js";
import { brandValidator } from "../validators/brandValidator.js";
import { auth } from "../middlewares/Auth.js";

const router = express.Router();

// router.use(auth);

router.get("/", getAllBrands);
router.get("/:id", getBrandById);
router.post("/create", brandValidator, createBrand);
router.patch("/update/:id", brandValidator, updateBrandById);
router.delete("/delete/:id", deleteBrandById);

export default router;
