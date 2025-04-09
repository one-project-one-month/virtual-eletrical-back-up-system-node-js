import InverterType from "../model/InverterType.js";
export const getAllInverterTypes = async (req, res) => {
  try {
    const inverterTypes = await InverterType.find();
    res.status(200).json(inverterTypes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createInverterTypes = async (req, res) => {
  const { _id, ...data } = req.body;
  try {
    const createdInverterTypes = await InverterType.createInverterTypes(data);
    res.status(201).json({
      msg: "Inverter Type created successfully",
      data: createdInverterTypes,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateInverterTypes = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const updatedInverterTypes = await InverterType.updateInverterTypes(
      id,
      data
    );
    if (!updatedInverterTypes) {
      return res.status(404).json({ error: "InverterTypes not found" });
    }
    res.status(200).json({
      msg: "InverterTypes updated successfully..",
      data: updatedInverterTypes,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteInverterTypes = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedInverterTypes = await InverterType.deleteInverterTypes(id);
    if (!deletedInverterTypes) {
      return res.status(404).json({ error: "InverterTypes not found" });
    }
    res.status(200).json({ message: "InverterTypes deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
