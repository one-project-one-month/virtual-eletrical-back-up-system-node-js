import Inverter from "../model/Inverter.js";

export const getAllInverters = async (req, res) => {
  try {
    const inverters = await Inverter.findAll();
    res.status(200).json({ data: inverters });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getInverterById = async (req, res) => {
  const { id } = req.params;
  try {
    const inverter = await Inverter.findById(id);
    if (!inverter) {
      return res.status(404).json({ msg: "Inverter not found" });
    }
    res.status(200).json({ data: inverter });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const createInverter = async (req, res) => {
  const { _id, ...data } = req.body;
  try {
    const newInverter = await Inverter.createInverter(data);
    res
      .status(201)
      .json({ msg: "Inverter created successfully", data: newInverter });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const updateInverter = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const inverter = await Inverter.updateInverter(id, data);
    if (!inverter) {
      return res.status(404).json({ msg: "Inverter not found" });
    }
    res
      .status(200)
      .json({ msg: "Inverter updated successfully", data: inverter });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const deleteInverter = async (req, res) => {
  const { id } = req.params;
  try {
    const inverter = await Inverter.deleteInverter(id);
    if (!inverter) {
      return res.status(404).json({ msg: "Inverter not found" });
    }
    res.status(200).json({ msg: "Inverter deleted successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
