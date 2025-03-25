import express from 'express';
import { createBatteryType, deleteBatteryType, getAllBatteryTypes, updateBatteryType } from '../controller/BatteryTypeController.js';
import { batteryTypeValidator } from '../validators/batteryTypeValidator.js';

const router = express.Router();


router.get("/", getAllBatteryTypes);
router.post("/create", batteryTypeValidator, createBatteryType);
router.patch("/update/:id", batteryTypeValidator, updateBatteryType);
router.delete("/delete/:id", deleteBatteryType);

export default router;