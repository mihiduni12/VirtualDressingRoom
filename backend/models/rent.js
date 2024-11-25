import mongoose from "mongoose";

const rentSchema = new mongoose.Schema({
  User_ID: {
    type: String,
    required: true,
  },

  date: {
    type: String,
    required: true,
  },

  starttime: {
    type: String,
    required: true,
  },
  endtime: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

const Rent = mongoose.model("Rent", rentSchema);

export default Rent;
