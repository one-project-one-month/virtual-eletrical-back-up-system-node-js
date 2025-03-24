import User from "../model/Users.js";
import { createToken } from "../utils/token.js";

export const signUp = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await User.signUp(name, email, password);

    //create token
    const token = createToken(user.id);

    res.status(200).json({ name, email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await User.login(email, password);

    //create token
    const token = createToken(user.id);

    res.status(200).json({ name, email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
