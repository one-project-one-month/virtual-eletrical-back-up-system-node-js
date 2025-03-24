import Brand from "../../model/Brands.js";
import Category from "../../model/Categories.js";

const data = [
  { name: "EcoFlow" },
  { name: "Jackery" },
  { name: "Anker" },
  { name: "Bluetti" },
  { name: "Goal Zero" },
  { name: "Schneider Electric" },
  { name: "Victron Energy" },
  { name: "Xantrex" },
  { name: "AIMS Power" },
  { name: "Samlex America" },
  { name: "Duracell" },
  { name: "Energizer" },
  { name: "Panasonic" },
  { name: "LG Chem" },
  { name: "Tesla" },
  { name: "Honda" },
  { name: "Yamaha" },
  { name: "Generac" },
  { name: "Champion" },
  { name: "Westinghouse" },
  { name: "SunPower" },
  { name: "First Solar" },
  { name: "Canadian Solar" },
  { name: "JinkoSolar" },
  { name: "Trina Solar" },
];

export const brandSeed = async () => {

  const categoryData = await Category.find();

  const brandWithCategoryId = data.map((item) => {
    const category = categoryData[Math.floor(Math.random() * 5)];
    const newData = { name: item.name, category: category._id };
    return newData;
  });

  await Brand.deleteMany({});
  await Brand.insertMany(brandWithCategoryId);
};
