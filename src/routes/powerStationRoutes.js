import express from "express";
import { auth } from "../middlewares/Auth.js";
import {
  getAllPowerStation,
  getPowerStation,
  addPowerStation,
  deletePowerStation,
  updatePowerStation
} from "../controller/PowerStationController.js";
import { powerStationValidator } from "../validators/powerStationValidator.js";

const router = express.Router();

// router.use(auth);

router.get("/", getAllPowerStation);
router.get("/:id", getPowerStation);
router.post("/create", powerStationValidator, addPowerStation);
router.patch("/update/:id", powerStationValidator, updatePowerStation);
router.delete("/delete/:id", deletePowerStation);

export default router;
