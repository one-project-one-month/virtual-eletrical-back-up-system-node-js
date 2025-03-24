import PowerStation from "../model/PowerStations.js"


export const getAllPowerStation = async (req, res) => {
    try {
        const data = await PowerStation.find().populate("brandId");
        res.status(200).json({data});
    } catch(error) {
        res.status(500).json({error});
    }
}


export const getPowerStation = async (req, res) => {
    const {id} = req.params;
    try {
        const data = await PowerStation.findById(id);
        if(!data) {
           return res.status(404).json({error: "Data not found"});
        }
        res.status(200).json({data});
    } catch(error) {
        res.status(500).json({error: error.message});
    }
}

export const addPowerStation = async (req, res) => {
    const {_id, ...data} = req.body;
    
    try {
        await PowerStation.create(data);
        res.status(200).json({msg: "Powerstation added successfully.."});
    } catch(error) {
        res.status(500).json({error: error.message});
    }
}

export const deletePowerStation = async (req, res) => {
    const {id} = req.params;
    try {
        const deleted = await PowerStation.findByIdAndDelete(id);
        if (!deleted) {
            return res.status(404).json({ error: "PowerStation not found" });
        }
        res.status(200).json({data: deleted});
    } catch(error) {
        res.status(500).json({error: error.message});
    }
}

export const updatePowerStation = async (req, res) => {
    const {id} = req.params;
    const data = req.body;
    try {
        const updated = await PowerStation.findByIdAndUpdate(id, data, {new: true});
        if (!updated) {
            return res.status(404).json({ error: "PowerStation not found" });
        }
        res.status(200).json({data: updated});
    } catch(error) {
        res.status(500).json({error: error.message});
    }
}