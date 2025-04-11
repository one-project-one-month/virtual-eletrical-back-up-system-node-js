import Battery from "../../model/Battery.js";
import BatteryType from "../../model/BatteryType.js";

const batteries = [
  {
    name: "Deep Cycle AGM 100Ah",
    batteryType: "65a123456789abcd12345678",
    storageAMP: 100,
    voltage: 12,
    price: 200,
    description:
      "AGM deep cycle battery with long lifespan and maintenance-free design.",
  },
  {
    name: "LiFePO4 200Ah",
    batteryType: "65b987654321abcd12345678",
    storageAMP: 200,
    voltage: 24,
    price: 800,
    description:
      "Lithium iron phosphate battery with high efficiency and deep discharge capability.",
  },
  {
    name: "Flooded Lead-Acid 150Ah",
    batteryType: "65cabcdef1234abcd12345678",
    storageAMP: 150,
    voltage: 12,
    price: 180,
    description:
      "Traditional lead-acid battery requiring maintenance but affordable and reliable.",
  },
  {
    name: "Nickel-Iron 300Ah",
    batteryType: "65d123456789abcd12345678",
    storageAMP: 300,
    voltage: 48,
    price: 1200,
    description:
      "Extremely durable battery with a lifespan of 30+ years, ideal for off-grid systems.",
  },
  {
    name: "NMC Lithium 120Ah",
    batteryType: "65e123456789abcd12345678",
    storageAMP: 120,
    voltage: 24,
    price: 600,
    description:
      "Compact lithium battery with high energy density and fast charging capability.",
  },
];

export const batterySeed = async () => {
  const batteryTypeIds = await BatteryType.find().select("_id");
  const newBatterires = batteries.map((bt, index) => {
    const indexType = Math.floor(Math.random() * batteryTypeIds.length);
    return { ...bt, batteryType: batteryTypeIds[indexType]._id };
  });
  await Battery.deleteMany({});
  await Battery.insertMany(newBatterires);
  console.log("battery added..");
};
