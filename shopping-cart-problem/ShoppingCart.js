module.exports = class ShoppingCart {
    constructor() {
        this.cart = [];
    }

    addProduct(product) {
        this.cart.push(product)
    }

    printAllProducts() {
      this.cart.forEach((product) => {
        const keyValuePairs = Object.entries(product)
        .map(([key, value]) => `${key}:${value}`)
        .join(' |')
        console.log(keyValuePairs);
      });
    }
    
    calculateTotalAmount() {
        let totalAmount = 0;
        for (const product of this.cart) {
          totalAmount += product.getProductPrice();
        }
        return totalAmount;
    }
}