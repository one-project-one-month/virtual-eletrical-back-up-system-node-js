import mongoose from "mongoose";

const Schema = mongoose.Schema;

const inverterTypeSchema = new Schema(
  {
    name: { type: String, required: true },
    efficiency: { type: Number, required: true },
  },
  { timestamps: true }
);

inverterTypeSchema.statics.createInverterType = function (inverterType) {
  return this.insertOne(inverterType);
};

inverterTypeSchema.statics.deleteInverterType = function (id) {
  return this.findByIdAndDelete({ _id: id });
};

inverterTypeSchema.statics.updateInverterType = function (
  id,
  updatedInverterType
) {
  return this.findByIdAndUpdate({ _id: id }, updatedInverterType, {
    new: true,
  });
};

const InverterType = mongoose.model("InverterType", inverterTypeSchema);
export default InverterType;
