import z from "zod";

const powerstationSchema = z.object({
    model: z.string().nonempty("Model is required"),
    brandId: z.string().nonempty("Brand shouldn't be empty"),
    watt: z.number().nonnegative("Watt must be a positive number").min(1, "Watt must be greater than 0"),
    waveType: z.string().nonempty("Wave Type is required"),
    usableWatt: z.number().nonnegative("Usable Watt must be a positive number").min(1, "Usable Watt must be greater than 0"),
    chargingTime: z.number().nonnegative("Charging Time must be a positive number").min(1, "Charging Time must be greater than 0"),
    chargingType: z.string().nonempty("Charging Type is required"),
    inputWatt: z.number().nonnegative("Input Watt must be a positive number").min(1, "Input Watt must be greater than 0"),
    inputAmp: z.number().nonnegative("Input Amp must be a positive number").min(1, "Input Amp must be greater than 0"),
    outputAmp: z.number().nonnegative("Output Amp must be a positive number").min(1, "Output Amp must be greater than 0"),
    powerStationPrice: z.number().nonnegative("Price must be a positive number").min(1, "Price must be greater than 0"),
    image: z.string(),
    description: z.string().nonempty("Description is required"),
});


export const powerStationValidator = (req, res, next) => {
    try {
        powerstationSchema.parse(req.body);
        next();
    } catch(error) {
        return res.status(400).json({error: error.format()});
    }
}