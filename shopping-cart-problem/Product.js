class Product{
    
    constructor(productID, productName, productPrice, category){
        this.productID = productID;
        this.productName = productName;
        this.productPrice = productPrice;
        this.category = category;
    }

    getProductDetails(){
        // write your implementation here
    }

    getProductPrice(){
        // write your implementation here
    }
}

module.exports = {
    Product: Product
}