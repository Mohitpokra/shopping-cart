const fs = require("fs");
const path = require('path');
const { Product } = require("./Product");
const DisCountedProduct = require('./DiscountedProduct');
const ShoppingCart = require("./ShoppingCart");

const getFinalResult = (filename, inputProductIds) => {
    try{
        const filePath = path.join(__dirname, filename);
        const productData = fs.readFileSync(filePath, 'utf8');
        let products = JSON.parse(productData);

        let cart = new ShoppingCart()
        for(let i = 0; i < inputProductIds.length; i++) {
            let product = products.find((product) => product.id === inputProductIds[i]);
            if(!product) {
                console.log(`Product with product id ${inputProductIds[i]} not found!`);
            } else {
                if(product.discount) {
                    cart.addProduct(new DisCountedProduct(product))
                } else {
                    cart.addProduct(new Product(product))
                }
            }
        }
        cart.printAllProducts();
       return cart.calculateTotalAmount();
    }catch(error){
        console.error(error);
    }
}

module.exports = { getFinalResult }