import express from "express";
import {
  getAllInverterTypes,
  createInverterTypes,
  updateInverterTypes,
  deleteInverterTypes,
} from "../controller/InverterTypeController.js";
import { inverterTypeValidator } from "../validators/inverterTypeValidator.js";

const router = express.Router();

router.get("/", getAllInverterTypes);
router.post("/create", inverterTypeValidator, createInverterTypes);
router.patch("/update/:id", inverterTypeValidator, updateInverterTypes);
router.delete("/delete/:id", deleteInverterTypes);

export default router;
