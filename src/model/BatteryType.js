import mongoose from "mongoose";

const Schema = mongoose.Schema;

const batteryTypeSchema = new Schema({
    name: {type: String, required: true},
    efficiency: {type: Number, required: true},
}, {timestamps: true});

batteryTypeSchema.statics.createBatteryType = function (batteryType) {
    return this.insertOne(batteryType);
}

batteryTypeSchema.statics.deleteBatteryType = function (id) {
    return this.findByIdAndDelete({_id: id});
}

batteryTypeSchema.statics.updateBatteryType = function (id, updatedBatteryType) {
    return this.findByIdAndUpdate({_id: id}, updatedBatteryType, {new: true});
}

const BatteryType = mongoose.model('BatteryType', batteryTypeSchema);
export default BatteryType;