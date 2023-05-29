'use strict';

const rectangle = {
  get width() {
    return this._width = 5;
  },
  set width(a) {
    if (!isNaN(a)) { this._width = +a; }
  },

  get height() {
    return this._height = 5;
  },
  set height(b) {
    if (!isNaN(b)) { this.height = +b; }
  },

  get perimetr() {
    let perimetr = 2 * (this.width + this.height);
    return perimetr + "см"
  },
  get square() {
    let square = this.width * this.height;
    return square + "см"
  }
}
console.log(rectangle.width);
console.log(rectangle.height);


rectangle.width = 25;
rectangle.height = 25;

console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.perimetr);