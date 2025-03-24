import z from "zod";

//validation object for user model
const userSchema = z.object({
    name: z.string().nonempty().min(3, "Name must be at least 3 characters long"),
    email: z.string().nonempty().email("Invalid email format"),
    password: z.string().nonempty().min(8, "Password must be at least 8 characters long")
});

//validate the signUp route
export const userValidator = (req, res, next) => {
    try {
        userSchema.parse(req.body);
        next();
    } catch(error) {
        return res.status(400).json({error: error.format()});
    }
}