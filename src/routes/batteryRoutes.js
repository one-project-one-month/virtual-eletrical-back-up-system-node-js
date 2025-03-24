import express from 'express';
import { createBattery, deleteBattery, getAllBatteries, getBatteryById, updateBattery } from '../controller/BatteryController.js';
import { batteryValidator } from '../validators/batteryValidator.js';

const router = express.Router();

router.get('/', getAllBatteries);
router.get('/:id', getBatteryById);
router.post('/create', batteryValidator, createBattery);
router.delete('/delete/:id', deleteBattery);
router.patch('/update/:id', batteryValidator, updateBattery);

export default router;