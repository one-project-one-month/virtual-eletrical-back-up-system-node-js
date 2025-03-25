import Brand from "../model/Brands.js"

export const getAllBrands = async(req, res) => {

    const {category} = req.query;

    const filter = category ? { category } : {};

    try {
        const data = await Brand.findByFilter(filter);
        res.status(200).json({data});
    } catch (error) {
        res.status(500).json({error});
    }
}

export const getBrandById = async(req, res) => {
    const {id} = req.params;
    try {
        const data = await Brand.findById({_id: id}).populate("category");
        res.status(200).json({data});
    } catch (error) {
        res.status(500).json({error});
    }
}

export const createBrand = async(req, res) => {
    const {_id, ...data} = req.body;

    try {
        const created = await Brand.insertOne(data);
        res.status(201).json({data: created});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

export const updateBrandById = async(req, res) => {
    const {id} = req.params;
    const data = req.body;
    try {
        const updated = await Brand.findByIdAndUpdate({_id: id}, data, {new: true});
        if(!updated) {
            res.status(404).json({error: "Brand not found"});
        }
        res.status(200).json({data: updated});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

export const deleteBrandById = async(req, res) => {
    const {id} = req.params;
    try {
        const deleted = await Brand.findByIdAndDelete({_id: id});
        if(!deleted) {
            res.status(404).json({error: "Brand not found"});
        }
        res.status(200).json({msg: "Brand successfully deleted"})
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}