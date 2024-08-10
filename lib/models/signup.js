import {Schema, model, models} from "mongoose";

import mongoose from 'mongoose';

let Signup;

try {
  const signupSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    age: {
      type: Number,
      min: 0,
    },
  });

 Signup = models.Signup || model("Signup", signupSchema);

 console.error('No Error in creating Signup model:');
} catch (error) {
  console.error('Error creating Signup model:', error);
}



export default Signup;