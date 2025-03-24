import Category from "../model/Categories.js"


export const getAllCategory = async(req, res) => {
    try {
        const data = await Category.find();
        res.status(200).json({data});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}