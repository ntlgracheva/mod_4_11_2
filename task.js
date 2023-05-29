'use strict';

const rectangle = {
  get width() {
    return this._width;
  },
  set width(a) {
    if (!isNaN(a)) { this._width = +a; }
    else this._width = 5;
  },

  get height() {
    return this._height;
  },
  set height(b) {
    if (!isNaN(b)) { this._height = +b; }
    else this._height = 5;
  },

  get perimetr() {
    let perimetr = 2 * (this._width + this._height);
    return perimetr + "см"
  },
  get square() {
    let square = this._width * this._height;
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