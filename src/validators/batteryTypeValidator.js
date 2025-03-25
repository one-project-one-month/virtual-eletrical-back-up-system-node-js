import z from "zod";

const batterySchema = z.object({
    name: z.string().nonempty("Name shouldn't be empty"),
    efficiency: z.number().min(0, "Efficiency must be positive number").nonnegative()
});


export const batteryTypeValidator = async (req, res, next) => {
    try {
        batterySchema.parse(req.body);
        next();
    } catch (error) {
        return res.status(400).json({ error: error.format() });
    }
}