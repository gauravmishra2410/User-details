const { date } = require('faker');
const mongoose = require('mongoose');

// 1: Creating users schema
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: Number, required: true, unique: true },
    father_name: { type: String, required: true },
    mother_name: { type: String, required: true },
    dob: { type: Date, required: true },
    address: {
      city: { type: String, required: true },
      pincode: { type: Number, required: true },
      state: { type: String, required: true },
      country: { type: String, required: true },
    },
    education: {
      xth_grade: { type: String, required: true },
      school: { type: String, required: true },
      passout_year: { type: Number, required: true },
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const User = mongoose.model('user', userSchema);

module.exports = User;
