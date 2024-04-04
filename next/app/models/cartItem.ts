import Product from "./product";

interface CartItem extends Product {
  Amount: number;
}

class CartItem implements CartItem {
  Amount: number;

  constructor(product: Product, amount: number = 0) {
    this.id = product.id;
    this.name = product.name;
    this.price = product.price;
    this.description = product.description;
    this.mainImage = product.mainImage;
    this.alternativeImages = product.alternativeImages;
    this.Amount = amount;
  }
}

export default CartItem;