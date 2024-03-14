import express from "express";
import { Catagory, Offers, Products, List } from "../models/storeModel.js";
import path from "path";
import multer from "multer";
import MongoClient from "mongodb";

const router = express();


// Routes for Catagories
// for Read
router.get("/api/catagories", (req, res) => {
  Catagory.find()
    .then((item) => {
      console.log(item);
      res
        .status(200)
        .json({ message: "Item fetched successfully", data: item });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Server error" });
    });
});

router.get("/api/lists", (req, res) => {
  List.find()
    .then((item) => {
      console.log(item);
      res
        .status(200)
        .json({ message: "Item fetched successfully", data: item });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Server error" });
    });
});

// For update in Read
router.get("/api/catagories/:id", (req, res) => {
  const { id } = req.params;
  Catagory.find({ _id: id })
    .then((item) => {
      console.log(item);
      res
        .status(200)
        .json({ message: "Item fetched successfully", data: item });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Server error" });
    });
});

// Routes for Nuts & Seeds
// For Read
router.get("/api/Nuts&Seeds", (req, res) => {
  Products.find({ type: "nuts&seeds" })
    .then((item) => {
      console.log(item);
      res
        .status(200)
        .json({ message: "Item fetched successfully", data: item });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Server error" });
    });
});

// For update in Read
router.get("/api/products/:id", (req, res) => {
  const { id } = req.params;
  Products.find({ _id: id })
    .then((item) => {
      console.log(item);
      res
        .status(200)
        .json({ message: "Item fetched successfully", data: item });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Server error" });
    });
});

// Routes for Snacks
// for Read
router.get("/api/Snacks", (req, res) => {
  Products.find({ type: "snacks" })
    .then((item) => {
      console.log(item);
      res
        .status(200)
        .json({ message: "Item fetched successfully", data: item });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Server error" });
    });
});

// Routes for Sweetners
// for Read
router.get("/api/Sweetners", (req, res) => {
  Products.find({ type: "sweetners" })
    .then((item) => {
      console.log(item);
      res
        .status(200)
        .json({ message: "Item fetched successfully", data: item });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Server error" });
    });
});

// Routes for Offers
// for Read
router.get("/api/offers", (req, res) => {
  Offers.find()
    .then((item) => {
      console.log(item);
      res
        .status(200)
        .json({ message: "Item fetched successfully", data: item });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Server error" });
    });
});

// For Categories
// Create a file for save the image
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/catagories");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
});

// Create new catagoreis
router.post("/catagories", upload.single("file"), (req, res) => {
  Catagory.create({ name: req.body.name, image: req.file.filename })
    .then((result) => res.json(result))
    .catch((err) => res.log(err));
});

// Update existing catagories
router.put("/catagories/:id", upload.single("file"), (req, res) => {
  const id = req.params.id; // Use req.params to access route parameters
  Catagory.findByIdAndUpdate(
    id,
    { name: req.body.name, image: req.file.filename },
    { new: true } // This option returns the updated document
  )
    .then((result) => res.json(result))
    .catch((err) => console.log(err)); // Use console.log to log errors
});

// Delete existing catagories
router.delete("/catagories/:id", (req, res) => {
  const id = req.params.id; // Use req.params to access route parameters
  Catagory.findByIdAndDelete(id)
    .then((result) => {
      if (result) {
        res.json({ message: "Category deleted successfully" });
      } else {
        res.json({ message: "No category found with the provided ID" });
      }
    })
    .catch((err) => console.log(err)); // Use console.log to log errors
});

// For Nuts
// Create a file for save the image
const storageForProducts = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/nuts&seeds");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

const uploadProducts = multer({
  storage: storageForProducts,
});

// Create new items
router.post("/products", uploadProducts.single("file"), (req, res) => {
  console.log(req.body.name);
  Products.create({
    name: req.body.name,
    price: req.body.price,
    discPrice: req.body.discPrice,
    image: req.file.filename,
  })
    .then((result) => res.json(result))
    .catch((err) => res.log(err));
});

// Update existing items
router.put("/products/:id", uploadProducts.single("file"), (req, res) => {
  const id = req.params.id; // Use req.params to access route parameters
  Products.findByIdAndUpdate(
    id,
    {
      name: req.body.name,
      price: req.body.price,
      discPrice: req.body.discPrice,
      image: req.file.filename,
    },
    { new: true } // This option returns the updated document
  )
    .then((result) => res.json(result))
    .catch((err) => console.log(err)); // Use console.log to log errors
});

// Delete existing items
router.delete("/products/:id", (req, res) => {
  const id = req.params.id; // Use req.params to access route parameters
  Products.findByIdAndDelete(id)
    .then((result) => {
      if (result) {
        res.json({ message: "Category deleted successfully" });
      } else {
        res.json({ message: "No category found with the provided ID" });
      }
    })
    .catch((err) => console.log(err)); // Use console.log to log errors
});

// For Cart
// router.use(cors())
// router.get("/list", (req, res) => {
//   let items = [];

//   db.collection("Items")
//       .find()
//       .sort({ name: 1 })
//       .forEach((item) => items.push(item))
//       .then(() => {
//           res.status(200).json(items);
//       })
//       .catch(() => {
//           res.status(500).json({ error: "Could not fetch the documents" });
//       });
// });

router.get("/api/lists", (req, res) => {
  List.find()
    .then((item) => {
      console.log(item);
      res
        .status(200)
        .json({ message: "Item fetched successfully", data: item });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Server error" });
    });
});

router.post("/list", (req, res) => {
  const { productId } = req.body;

  // Create a new cart item
  const newCartItem = new List({ productId });

  // Save the cart item to the database
  newCartItem
    .save()
    .then((savedCartItem) => {
      console.log(savedCartItem);
      res.status(201).json(savedCartItem);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: "Could not create the cart item" });
    });
});



// router.delete("/list/:id", (req, res) => {
//   db.collection("Items")
//       .deleteOne({ _id: new ObjectId(req.params.id) })
//       .then((result) => {
//           res.status(202).json(result);
//       })
//       .catch((err) => {
//           res.status(500).json({
//               error: "Could not delete the document",
//           });
//       });
// });

export default router;
