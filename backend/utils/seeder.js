const dotenv = require("dotenv");
const Product = require("../models/product");
const connectDatebase = require("../config/database");

const products = require("../data/products");

// Setting up the dotenv file
dotenv.config({ path: "backend/config/config.env" });
connectDatebase();

const seedProducts = async () => {
  try {
    await Product.deleteMany();
    console.log("Product are deleted");

    await Product.insertMany(products);
    console.log("All Product are added");

    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

seedProducts();
