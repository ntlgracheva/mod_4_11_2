'use strict';

const cart = {
  items: [],
  get totalPrice() {
    return this.calculateItemPrice();
  },
  count: 0,
  discount: 0,

  add(productName, productPrice, productAmount = 1) {
    this.items.push({
      productName,
      productPrice,
      productAmount,
    });

    this.count = this.items.reduce((acc, item) => acc + item.productAmount,
      0,
    );

    this.calculateItemPrice();
  },

  increaseCount(num) {
    return this.count += num;
  },

  calculateItemPrice() {
    return  this.items.reduce((acc, item) =>
      acc + (item.productPrice * item.productAmount),
      0,) * ((1 - this.discount / 100))

  },

  clear() {
    this.items = [];
    this.totalPrice = 0;
    this.count = 0;
  },

  print() {
    const itemsList = this.items.map(item =>
      JSON.stringify(item));
    console.log(`Список товаров в корзине: 
    ${itemsList}/n общую стоимость корзины: ${this.totalPrice}`);
  },

  set setDiscount(promocode) {
    if (promocode.toUpperCase() === "METHED") { this.discount = 15 }
    if (promocode.toUpperCase() === "NEWYEAR") { this.discount = 21 }
  }
};

cart.add('pc', 500, 3);
cart.add('table', 100, 2);
cart.add('pen', 1, 30);

let x = cart.discount;
console.log(x);

cart.print();

cart.setDiscount = "methed";
let y = cart.discount;
console.log(y);

cart.print();



