import Product from "./product";

export interface CartItem extends Product {
  quantity: number;
}

export class CartItem implements CartItem {
  quantity: number;

  constructor(product: Product, quantity: number = 1) {
    this.id = product.id;
    this.name = product.name;
    this.price = product.price;
    this.description = product.description;
    this.mainImage = product.mainImage;
    this.alternativeImages = product.alternativeImages;
    this.quantity = quantity;
  }
}

export default CartItem;