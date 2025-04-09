import InverterType from "../../model/InverterType.js";

const inverterTypes = [
  {
    name: "Grid-tied inverter",
    efficiency: 80.5,
  },
  {
    name: "Solar inverter",
    efficiency: 60.5,
  },
  {
    name: "Hybrid inverter",
    efficiency: 73.8,
  },
  {
    name: "Standalone inverter",
    efficiency: 83.5,
  },
  {
    name: "Single Phase inverter",
    efficiency: 73.5,
  },
];

export const inverterTypeSeed = async () => {
  await InverterType.deleteMany({});
  await InverterType.insertMany(inverterTypes);
  console.log("inverter Type added..");
};
