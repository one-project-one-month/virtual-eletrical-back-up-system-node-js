import { userSeed } from "./userSeed.js";
import { powerStationSeed } from "./powerStationSeed.js";
import { categorySeed } from "./categorySeed.js";
import { brandSeed } from "./brandSeed.js";
import { batteryTypeSeed } from "./batteryTypeSeed.js";
import { batterySeed } from "./batterySeed.js";
import { inverterTypeSeed } from "./inverterTypeSeed.js";
import { inverterSeed } from "./inverterSeed.js";

export const seeder = async () => {
  await userSeed();
  await categorySeed();
  await brandSeed();
  await powerStationSeed();
  await batteryTypeSeed();
  await batterySeed();
  await inverterTypeSeed();
  await inverterSeed();
};
