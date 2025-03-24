import Battery from "../model/Battery.js"


export const getAllBatteries = async (req, res) => {
    try {
        const batteries = await Battery.findAll();
        res.status(200).json({data: batteries});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getBatteryById = async (req, res) => {
    const {id} = req.params;
    try {
        const battery = await Battery.findById(id);
        if (!battery) {
            return res.status(404).json({msg: "Battery not found"});
        }
        res.status(200).json({data: battery});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const createBattery = async (req, res) => {
    const { _id, ...data} = req.body;
    try {
        const newBattery = await Battery.createBattery(data);
        res.status(200).json({ msg: "Battery created successfully", data: newBattery});
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

export const updateBattery = async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    try {
        const battery = await Battery.updateBattery(id, data);
        if (!battery) {
            return res.status(404).json({ msg: "Battery not found" });
        }
        res.status(200).json({msg: "Battery updated successfully", data: battery });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

export const deleteBattery = async (req, res) => {
    const { id } = req.params;
    try {
        const battery = await Battery.deleteBattery(id);
        if (!battery) {
            return res.status(404).json({ msg: "Battery not found" });
        }
        res.status(200).json({ msg: "Battery deleted successfully" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};