import z, { string } from "zod";

const brandSchema = z.object({
    name: string().nonempty("This field shouldn't be empty"),
    category: string().nonempty("This field shouldn't be empty")
});

export const  brandValidator = async (req, res, next) => {
    try {
        brandSchema.parse(req.body);
        next();
    } catch(error) {
        return res.status(400).json({error: error.format()});
    }
}