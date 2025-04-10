import InverterType from "../../model/InverterType.js";

const inverterTypes = [
  {
    name: "Grid-tied inverter",
    efficiency: 0.8,
  },
  {
    name: "Solar inverter",
    efficiency: 0.605,
  },
  {
    name: "Hybrid inverter",
    efficiency: 0.738,
  },
  {
    name: "Standalone inverter",
    efficiency: 0.835,
  },
  {
    name: "Single Phase inverter",
    efficiency: 0.735,
  },
];

export const inverterTypeSeed = async () => {
  await InverterType.deleteMany({});
  await InverterType.insertMany(inverterTypes);
  console.log("inverter Type added..");
};
