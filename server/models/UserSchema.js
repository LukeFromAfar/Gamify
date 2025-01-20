const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: false,
  },
  location: [
    {
      address: String,
      zipCode: String,
      city: String,
    },
  ],
});

UserSchema.post("save", function () {});

const User = model("User", UserSchema);

module.exports = User;
