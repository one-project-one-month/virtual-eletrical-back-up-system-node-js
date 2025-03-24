import express from "express";
import { login, signUp } from "../controller/UserController.js";
import { userValidator } from "../validators/userValidator.js";

const router = express.Router();

router.get('/login', userValidator, login);
router.post('/sign-up', userValidator, signUp);

export default router;
