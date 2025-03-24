import mongoose from "mongoose";

const Schema = mongoose.Schema;

const powerStationSchema = new Schema({
    model: { type: String, required: true },
    watt: { type: Number, required: true },
    brandId: { type: mongoose.Schema.Types.ObjectId, ref: "Brand", required: true },
    waveType: { type: String, required: true },
    usableWatt: { type: Number, required: true },
    chargingTime: { type: Number, required: true },
    chargingType: { type: String, required: true },
    inputWatt: { type: Number, required: true },
    inputAmp: { type: Number, required: true },
    outputAmp: { type: Number, required: true },
    powerStationPrice: { type: Number, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true }
}, {timestamps: true});

const PowerStation = mongoose.model('PowerStation', powerStationSchema);

export default PowerStation;