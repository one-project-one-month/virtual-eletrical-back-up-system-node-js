import BatteryType from "../model/BatteryType.js";


export const getAllBatteryTypes = async (req, res) => {
    try {
        const batteryTypes = await BatteryType.find();
        res.status(200).json(batteryTypes);
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
}

export const createBatteryType = async (req, res) => {
    const {_id, ...data} = req.body;
    try {
        const createdBatteryType = await BatteryType.createBatteryType(data);
        res.status(201).json({msg: "Battery Type created successfully", data: createdBatteryType});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateBatteryType = async (req, res) => {
    const {id} = req.params;
    const data = req.body;
    try {
        const updatedBatteryType = await BatteryType.updateBatteryType(id, data);
        if (!updatedBatteryType) {
            return res.status(404).json({ error: "BatteryType not found" });
        }
        res.status(200).json({msg: "BatteryType updated successfully..", data: updatedBatteryType});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteBatteryType = async (req, res) => {
    const {id} = req.params;
    try {
        const deletedBatteryType = await BatteryType.deleteBatteryType(id);
        if (!deletedBatteryType) {
            return res.status(404).json({ error: "BatteryType not found" });
        }
        res.status(200).json({ message: "BatteryType deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};