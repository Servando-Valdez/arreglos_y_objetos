import {
  showMenu,
  registerProduct,
  showProducts,
  updateProduct,
  findProduct,
  deleteProduct,
} from "./controller.js";
import moment from "moment";
import { question } from "readline-sync";
import { Product } from "./product.js";

let running = true;

console.log(`Welcome, In this program you can to register,
update, delete, search and consult products`);

console.log(`Warning, code must not have more 6 characters and must be unique,
name must not have more 1000 characters, price most be a number, stock must be a number, 
and date must be a date`);

while (running) {
  console.log(showMenu());
  const option = question("write the number of the operation: ");
  switch (option) {
    case "1":
      registerProduct();
      break;
    case "2":
      updateProduct(question("Write the product code to update: "));
      break;
    case "3":
      deleteProduct(question("Write the product code to delete: "));
      break;
    case "4":
      let newProduct = findProduct(question("Write the product name or code to find: "));
      newProduct !== undefined
        ? console.log(newProduct.showProducto())
        : console.log("Prorudct not found");

      break;
    case "5":
      showProducts();
      break;

    case "exit":
      running = false;
      break;

    default:
      console.log("Please, write a number from the menu");
  }
  question("\n- Enter to continue -");
}
