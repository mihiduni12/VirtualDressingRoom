import Rent from "../models/rent.js";
import express from "express";

const router = express.Router();

// Create a new rent
router.post("/", async (req, res) => {
  try {
    const newRent = await Rent.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        rent: newRent,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
});

//get  based on ID
router.get("/:id", async (req, res) => {
  try {
    const rent = await Rent.findById(req.params.id);
    res.status(200).json({ rent });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: "rent not found",
    });
  }
});
//get details
router.get("/", async (req, res) => {
    try {
      const rents = await Rent.find();
      res.status(200).json({ rents });
    } catch (error) {
      res.status(500).send(error);
    }
  });
//update details
router.patch("/:id", async (req, res) => {
  try {
    const rent = await Rent.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: {
        rent,
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
    await Rent.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: "Rent not found",
    });
  }
});

//ignore
router.post("/search", async (req, res) => {
  const { brand } = req.body;
  try {
    let rents = await Rent.find({
      $or: [{ brand: { $regex: brand, $options: "i" } }],
    });
    res.status(200).json({ rents });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
});

export default router;
