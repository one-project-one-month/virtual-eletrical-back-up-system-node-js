import z from "zod";

const inverterTypeSchema = z.object({
  name: z.string().nonempty("Name shouldn't be empty"),
  efficiency: z
    .number()
    .min(0, "Efficiency must be positive number")
    .nonnegative(),
});

export const inverterTypeValidator = async (req, res, next) => {
  try {
    inverterTypeSchema.parse(req.body);
    next();
  } catch (error) {
    return res.status(400).json({ error: error.format() });
  }
};
