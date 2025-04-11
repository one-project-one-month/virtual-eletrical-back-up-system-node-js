import Inverter from "../../model/Inverter.js";
import InverterType from "../../model/InverterType.js";
import Brand from "../../model/Brands.js";

const inverters = [
  {
    inverterType: "65a123456789abcd12345678",
    watt: 4000,
    waveType: "pure sine wave",
    model: "Conext SW 4024",
    brandId: "65a123456789abcd12345678",
    compatibleBattery: "Lithium-Ion Battery",
    inverterVolt: 24,
    inverterPrice: 599.99,
    description: "Eco-friendly inverter with pure sine wave output.",
  },
  {
    inverterType: "65b987654321abcd12345678",
    watt: 2000,
    waveType: "square wave",
    model: "Xantrex Freedom XC 2000",
    brandId: "65b987654321abcd12345678",
    compatibleBattery: "Gel Battery",
    inverterVolt: 12,
    inverterPrice: 1256.0,
    description: "Maximum efficiency inverter with square wave output.",
  },
  {
    inverterType: "65cabcdef1234abcd12345678",
    watt: 4000,
    waveType: "quasi sine wave",
    model: "Victron MultiPlus 48/2000/50",
    brandId: "65cabcdef1234abcd12345678",
    compatibleBattery: "Tubular Battery",
    inverterVolt: 48,
    inverterPrice: 839.0,
    description: "Minimal noise inverter with quasi sine wave output.",
  },
  {
    inverterType: "65d123456789abcd12345678",
    watt: 800,
    waveType: "modified square wave",
    model: "Go Power! GP-800",
    brandId: "65d123456789abcd12345678",
    compatibleBattery: "Flooded Lead-Acid Battery",
    inverterVolt: 12,
    inverterPrice: 1549.0,
    description: "Portable inverter with modified square wave output.",
  },
  {
    inverterType: "65e123456789abcd12345678",
    watt: 3000,
    waveType: "pure sine wave",
    model: "Growatt SPF 3000TL",
    brandId: "65e123456789abcd12345678",
    compatibleBattery: "AGM Battery",
    inverterVolt: 24,
    inverterPrice: 499.0,
    description: "Heavy duty inverter with pure sine wave output.",
  },
];

export const inverterSeed = async () => {
  const inverterTypeIds = await InverterType.find().select("_id");
  const brandIds = await Brand.find().select("_id");
  const newInverters = inverters.map((bt, index) => {
    const indexType = Math.floor(Math.random() * inverterTypeIds.length);
    return {
      ...bt,
      inverterType: inverterTypeIds[indexType]._id,
      brandId: brandIds[indexType]._id,
    };
  });
  await Inverter.deleteMany({});
  await Inverter.insertMany(newInverters);
  console.log("inverter added..");
};
