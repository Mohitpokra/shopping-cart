class Product{
    
    constructor({id, name, price, category}){
        this.productID = id;
        this.productName = name;
        this.productPrice = price;
        this.category = category;
    }

    getProductDetails(){
        return {
            productID : this.productID,
            productName : this.productNameproductID,
            productPrice : this.productPriceproductID,
            category : this.categoryproductID,
        }
    }

    getProductPrice(){
        return Number(this.productPrice);
    }
}

module.exports = {
    Product: Product
}