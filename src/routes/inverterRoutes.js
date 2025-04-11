import express from "express";
import {
  getAllInverters,
  getInverterById,
  createInverter,
  updateInverter,
  deleteInverter,
} from "../controller/InverterController.js";
import { inverterValidator } from "../validators/inverterValidator.js";

const router = express.Router();

router.get("/", getAllInverters);
router.get("/:id", getInverterById);
router.post("/create", inverterValidator, createInverter);
router.delete("/delete/:id", deleteInverter);
router.patch("/update/:id", inverterValidator, updateInverter);

export default router;
