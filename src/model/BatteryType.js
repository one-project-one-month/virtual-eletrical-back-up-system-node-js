import mongoose from "mongoose";

const Schema = mongoose.Schema;

const batteryTypeSchema = new Schema({
    name: {type: String, required: true},
    efficiency: {type: Number, required: true},
});

const BatteryType = mongoose.model('BatteryType', batteryTypeSchema);
export default BatteryType;