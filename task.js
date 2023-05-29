'use strict';

const rectangle = {
  _width: 5,
  _height: 5,

  set width(a) {
    if (!isNaN(a)) { this._width = +a; }
  },

  set height(b) {
    if (!isNaN(b)) { this._height = +b; }
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
/*
rectangle.width = 25;

rectangle.height = 25;*/
console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.perimetr);