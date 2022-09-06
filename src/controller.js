import { question } from "readline-sync";
import { Product } from "./product.js";
import moment from "moment";

let products = [];

export const showMenu = () => {
  return `Menu
    1. Register Product
    2. Update Product with its code
    3. Delete Product with its code
    4. Search Product with its name and code
    5. Consult all Products`;
};

export const findProduct = (product) => {
  let productFound;
  products.find((p) => {
    if (p.name === product.toLowerCase() || p.code === product.toLowerCase()) {
      productFound = p;
    }
  });
  return productFound;
};

export const registerProduct = () => {
  try {
    let code = question(`Product's code: `);
    let name = question(`Product's name: `);
    let price = question(`Product's price: `);
    let stock = question(`Product's stock: `);
    let date = moment();

    if (findProduct(code)) {
      throw new Error("Error: Existing Code. Code Must Be Unique");
    }

    let product = new Product(
      code.toLowerCase(),
      name.toLowerCase(),
      price,
      stock,
      date
    );

    products.push(product);
  } catch (error) {
    console.error(error.message);
  }
};

export const updateProduct = (product) => {
  try {
    let newProduct = findProduct(product);
    if (!newProduct) {
      throw new Error("Error: existing product");
    }

    let name = question(`Product's name: `);
    newProduct.name = name;
    let price = question(`Product's price: `);
    newProduct.price = price;
    let stock = question(`Product's stock: `);
    newProduct.stock = stock;
    let date = moment();
    newProduct.date = date;

  } catch (error) {
    console.error(error.message);
  }
};

export const deleteProduct = (product) => {
  try {
    let newProduct = findProduct(product);
    if (!newProduct) {
      throw new Error("Error: Product Not Found");
    }

    products = products.filter((p) => p.code !== newProduct.code);
  } catch (error) {
    console.error(error.message);
  }
};

export const showProducts = () => {
  if (products.length > 0) products.map((p) => console.log(p.showProducto()));
  else console.log("No hay productos");
};

// const validateProduct = (product) => {
//   try {
//     if (product.code.length !== 6) {
//       throw new Error("Error: Code has more of 6 characters");
//     }

//     if (product.name.length > 100) {
//       throw new Error("Error: Name has more of 100 characters");
//     }

//     if (!typeof product.price === "number" && Number.isInteger(product.price)) {
//       throw new Error("Error: Price must be a number with decimals");
//     }

//     if (!Number.isInteger(product.stock)) {
//       throw new Error("Error: Stock must be a integer number");
//     }

//     if (typeof product.date !== "object") {
//       throw new Error("Date most be a Date Object");
//     }
//     return true;
//   } catch (error) {
//     console.error(error.message);
//   }
// };
