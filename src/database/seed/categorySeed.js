import Category from "../../model/Categories.js"

const data = [
    { "name": "PowerStation" },
    { "name": "Invertor" },
    { "name": "Battery" },
    { "name": "Generator" },
    { "name": "Solar" }
];

export const categorySeed = async () => {
    await Category.deleteMany({});
    await Category.insertMany(data);
}