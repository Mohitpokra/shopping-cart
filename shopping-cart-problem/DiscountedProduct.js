const { Product } = require("./Product");

class DisCountedProduct extends Product {
    constructor({id, name, price, category, discount = 0}) {
        super({id, name, price, category});
        this.discount = Number(discount)
    }

    getProductPrice() {
       let price = super.getProductPrice();
       return Number(price) - Number(this.discount);
    }

    getProductDetails(){
        let productDetails = super.getProductDetails();
        return {
            ...productDetails,
            productPrice : this.getProductPrice(),
        }
    }
}

module.exports = DisCountedProduct;