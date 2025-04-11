import mongoose from "mongoose";

const Schema = mongoose.Schema;

const inverterSchema = new Schema(
  {
    inverterType: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "InverterType",
      required: true,
    },
    waveType: { type: String, required: true },
    model: { type: String, required: true },
    brandId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Brand",
      required: true,
    },
    compatibleBattery: {
      type: String,
      required: true,
    },
    inverterVolt: {
      type: Number,
      required: true,
    },
    inverterPrice: { type: Number, required: true },
    watt: { type: Number, required: true },
    image: { type: String },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

inverterSchema.statics.findAll = function () {
  return this.find().populate("inverterType").populate("brandId");
};

inverterSchema.statics.findById = function (id) {
  return this.findOne({ _id: id }).populate("inverterType").populate("brandId");
};

inverterSchema.statics.createInverter = function (inverter) {
  return this.insertOne(inverter);
};

inverterSchema.statics.updateInverter = function (id, updatedInverter) {
  return this.findByIdAndUpdate({ _id: id }, updatedInverter, { new: true });
};

inverterSchema.statics.deleteInverter = function (id) {
  return this.findByIdAndDelete({ _id: id });
};

const Inverter = mongoose.model("Inverter", inverterSchema);

export default Inverter;
