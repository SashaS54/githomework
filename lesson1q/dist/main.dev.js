"use strict";

var _cart;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var a = "foo",
    b = "bar";
var cart = (_cart = {
  "Bread": 1,
  "Milk": 2,
  "beer": 10
}, _defineProperty(_cart, a + '_' + b, "fuuuuu"), _defineProperty(_cart, a, "my string"), _defineProperty(_cart, 12, "Number"), _cart);
cart["butter"] = 1;
cart[b] = "my bar";
cart.Bread = null;
delete cart.Bread;

if (typeof cart.Hello === "undefined") {
  alert("no hello");
} else {
  alert("property exists");
}

alert(cart.hasOwnPropertyy("Hello"));
var h = '<ul>';

for (var k in cart) {
  h += "<li>".concat(k, ": ").concat(cart, "</li>");
}

function addInCart(title, qty) {
  cart[title] = qty;
  printCart();
}

function removeFromCart(title) {
  delete cart[title];
  printCart();
}

var cartNew = {};
/*for(let k in cart) {
    cartNew[k] = cart[k];
}

cartNew = Object.assign({}, cart)
*/

cartNew = JSON.parse(JSON.stringify(cart));
cartNew.Milk = 1000;