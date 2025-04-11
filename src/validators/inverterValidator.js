import z from "zod";
const inverterSchema = z.object({
  inverterType: z.string().min(1, { message: "Inverter type is required" }),
  model: z.string().min(1, { message: "Model is required" }),
  brandId: z.string().min(1, { message: "Brand is required" }),
  inverterPrice: z.number().min(1, { message: "Price is required" }),
  waveType: z.string().min(1, { message: "Wave type is required" }),
  compatibleBattery: z
    .string()
    .min(1, { message: "Compatible battery is required" }),
  watt: z.number().min(1, { message: "Power is required" }),
  inverterVolt: z.number().min(1, { message: "Volt is required" }),
});

export const inverterValidator = async (req, res, next) => {
  try {
    inverterSchema.parse(req.body);
    next();
  } catch (error) {
    res.status(400).json({ error: error.format() });
  }
};
