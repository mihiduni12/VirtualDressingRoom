import Car from "../models/car.js";
import express from "express";

const router = express.Router();

// Create a new car
router.post("/", async (req, res) => {
  try {
    const newCar = await Car.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        car: newCar,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
});

//get car based on ID
router.get("/:id", async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);
    res.status(200).json({ car });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: "Car not found",
    });
  }
});

//search functionality and category wise load cars
router.get("/", async (req, res) => {
  try {
    const { brand, category } = req.query;
    let query = {};

    if (brand) {
      query.brand = { $regex: brand, $options: "i" };
      console.log(brand);
    }

    if (category) {
      query.category = category;
    }

    const cars = await Car.find(query);

    if (cars.length === 0) {
      return res.status(404).json({
        status: "fail",
        message: "No cars found with the specified criteria",
      });
    }

    res.status(200).json({ cars });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
});

//update details
router.patch("/:id", async (req, res) => {
  try {
    const car = await Car.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: {
        car,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
});

//delete
router.delete("/:id", async (req, res) => {
  try {
    await Car.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: "Car not found",
    });
  }
});

//ignore
router.post("/search", async (req, res) => {
  const { brand } = req.body;
  try {
    let cars = await Car.find({
      $or: [{ brand: { $regex: brand, $options: "i" } }],
    });
    res.status(200).json({ cars });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
});

export default router;
