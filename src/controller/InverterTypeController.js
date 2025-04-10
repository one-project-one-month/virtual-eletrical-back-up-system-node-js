import InverterType from "../model/InverterType.js";
export const getAllInverterTypes = async (req, res) => {
  try {
    const inverterTypes = await InverterType.find();
    res.status(200).json(inverterTypes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createInverterType = async (req, res) => {
  const { _id, ...data } = req.body;
  try {
    const createdInverterType = await InverterType.createInverterType(data);
    res.status(201).json({
      msg: "Inverter Type created successfully",
      data: createdInverterType,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateInverterType = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const updatedInverterType = await InverterType.updateInverterType(id, data);
    if (!updatedInverterType) {
      return res.status(404).json({ error: "InverterType not found" });
    }
    res.status(200).json({
      msg: "InverterType updated successfully..",
      data: updatedInverterType,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteInverterType = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedInverterType = await InverterType.deleteInverterType(id);
    if (!deletedInverterType) {
      return res.status(404).json({ error: "InverterType not found" });
    }
    res.status(200).json({ message: "InverterType deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
