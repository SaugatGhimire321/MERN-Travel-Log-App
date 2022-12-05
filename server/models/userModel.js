import mongoose from "mongoose";
import validator from 'validator'

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: [true,"username must be unique"]
    },
    password: {
      type: String,
      required: [true,"Password is required"],
      validate:[validator.isStrongPassword,"Password must be at least 8 characters long with at least 1 Uppercase character, number and a symbol"]
    },
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: [true,"Email is required"],
      validate: [validator.isEmail,"Please enter a valid email"],
      unique: [true,"email must be unique"]
    },
    posts:[{type:String}],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;