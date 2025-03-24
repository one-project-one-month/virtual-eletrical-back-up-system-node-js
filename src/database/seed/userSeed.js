import { faker } from "@faker-js/faker";
import User from "../../model/Users.js";

export const userSeed = async () => {
    const randomUser = () => ({
        name: faker.person.fullName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
    });
    
    const users = Array.from({length: 10}, () => {
        const user = randomUser();
        return user;
    });
    
    await User.deleteMany({});
    await User.insertMany(users);
    console.log("random user added..");
}

