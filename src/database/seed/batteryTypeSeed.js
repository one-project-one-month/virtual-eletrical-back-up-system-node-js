import BatteryType from "../../model/BatteryType.js";

const batteryTypes = [
    {
      name: "Lead-Acid (Flooded)",
      efficiency: 0.75, // 75% efficiency
    },
    {
      name: "Lead-Acid (AGM)",
      efficiency: 0.85, // 85% efficiency
    },
    {
      name: "Lithium-Ion (LiFePO4)",
      efficiency: 0.95, // 95% efficiency
    },
    {
      name: "Lithium-Ion (NMC)",
      efficiency: 0.90, // 90% efficiency
    },
    {
      name: "Nickel-Iron (NiFe)",
      efficiency: 0.70, // 70% efficiency
    },
  ];
  


export const batteryTypeSeed = async () => {
    await BatteryType.deleteMany({});
    await BatteryType.insertMany(batteryTypes);
    console.log("Battery Type added..");
}