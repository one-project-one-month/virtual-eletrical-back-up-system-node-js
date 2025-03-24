import mongoose from "mongoose";
import bcrypt from "bcrypt";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {type: String, required: true, trim: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
}, {timestamps: true});

userSchema.statics.signUp = async function (name, email, password) {

    const emailExist = await this.findOne({email});
    if(emailExist) {
        throw Error("Email already in use");
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await this.create({name, email, password: hash});
    return user;
}

userSchema.statics.login = async function (email, password) {
    
    const user = await this.findOne({email});
    if(!user) {
        throw Error("Incorrect email or password");
    }

    const match = await bcrypt.compare(password, user.password);
    if(!match) {
        throw Error("Incorrect email or password");
    }

    return user;
}


const User = mongoose.model('User', userSchema);
export default User;
