import z from 'zod';
const batterySchema = z.object({
    name: z.string().nonempty("Name is required"),
    batteryType: z.string().nonempty("Battery type is required"),
    storageAMP: z.number().min(0, "Storage AMP must be a positive number"),
    voltage: z.number().min(0, "Voltage must be a positive number"),
    price: z.number().min(0, "Price must be a positive number"),
    description: z.string().nonempty("Description is required")
});

export const batteryValidator = async (req, res, next) => {
    try {
        batterySchema.parse(req.body);
        next();
    } catch (error) {
        res.status(400).json({error: error.format()});
    }
}