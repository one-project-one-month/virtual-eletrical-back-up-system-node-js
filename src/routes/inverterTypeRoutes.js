import express from "express";
import {
  getAllInverterTypes,
  createInverterType,
  updateInverterType,
  deleteInverterType,
} from "../controller/InverterTypeController.js";
import { inverterTypeValidator } from "../validators/inverterTypeValidator.js";

const router = express.Router();

router.get("/", getAllInverterTypes);
router.post("/create", inverterTypeValidator, createInverterType);
router.patch("/update/:id", inverterTypeValidator, updateInverterType);
router.delete("/delete/:id", deleteInverterType);

export default router;
