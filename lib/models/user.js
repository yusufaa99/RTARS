import { Schema, Types, model, models } from "mongoose";

const Userschema = new Schema({
    username: {type: String},
    email: {type: String},
    password: {type: String}
});

const User = models.User || model("User", Userschema);
 
export default User;