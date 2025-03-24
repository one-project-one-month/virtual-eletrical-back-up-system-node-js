import mongoose from "mongoose";

const Schema = mongoose.Schema;

const batterySchema = new Schema({
  name: { type: String, required: true },
  batteryType: { type: mongoose.Schema.Types.ObjectId, ref: "BatteryType" },
  storageAMP: { type: Number, required: true },
  voltage: { type: Number, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
});

batterySchema.statics.findAll = function () {
    return this.find().populate("batteryType");
}

batterySchema.statics.findById = function (id) {
    return this.findOne({_id: id}).populate("batteryType");
}

batterySchema.statics.createBattery = function (battery) {
    return this.insertOne(battery);
}

batterySchema.statics.updateBattery = function (id, updatedBattery) {
    return this.findByIdAndUpdate({_id: id}, updatedBattery, {new: true});
}

batterySchema.statics.deleteBattery = function (id) {
    return this.findByIdAndDelete({_id: id});
}

const Battery = mongoose.model("Battery", batterySchema);

export default Battery;
