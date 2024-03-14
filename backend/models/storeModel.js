import mongoose from "mongoose";

const Schema = mongoose.Schema;

const catagorySchema = new Schema(
  {
    name: {
      type: String,
    },
    image: {
      type: String,
    },
  },
);

export const Catagory = mongoose.model("catagory", catagorySchema);

const productsSchema = new Schema({  
  name: {
    type: String,
  },
  price: {
    type: String,
  },
  discPrice: {
    type: String,
  },
  image: {
    type: String,
  },
  imageFolder: {
    type: String,
  },
  type: {
    type: String,
  },
});

export const Products = mongoose.model("products", productsSchema);

const OffersSchema = new Schema({
  _id: {
    type: String,
  },
  name: {
    type: String,
  },
  price: {
    type: String,
  },
  discPrice: {
    type: String,
  },
  image: {
    type: String,
  },
});

export const Offers = mongoose.model("offers", OffersSchema);

const ItemsSchema = new Schema({
  productId: {
    type: String,
  }
});

export const List = mongoose.model("items", ItemsSchema);
