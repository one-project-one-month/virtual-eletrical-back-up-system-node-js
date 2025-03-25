import mongoose from "mongoose";


const Schema = mongoose.Schema;

const brandSchema = new Schema({
    name: {type: String, required: true},
    category: {type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true}
}, {timestamps: true});

brandSchema.statics.findByFilter = async function (filter = {}) {
    return await this.find(filter).populate("category");
};

const Brand = mongoose.model("Brand", brandSchema);
export default Brand;