"use strict";

var topPanel = {
  info: function info() {
    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Some text here";
    var autoclose = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    this.showPanel(text, "info", autoclose);
  },
  success: function success() {
    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Some text here";
    var autoclose = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    this.showPanel(text, "success", autoclose);
  },
  danger: function danger() {
    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Some text here";
    var autoclose = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    this.showPanel(text, "danger", autoclose);
  },
  warning: function warning() {
    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Some text here";
    var autoclose = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    this.showPanel(text, "warning", autoclose);
  },
  showPanel: function showPanel(text, type, autoclose) {
    var btn = autoclose ? "" : '<button onclick="topPanel.closePanel()>&times;</button>';
    var h = "<div id=\"top_panel\" class=\"panel_".concat(type, "\">\n          <p>").concat(text, "</p>").concat(btn, "<div></div>");

    if (document.getElementById("top_panel") !== null) {
      this.closePanel();
    }

    document.getElementsByTagName("body")[0].insertAdjacentHTML("afterbegin", h);

    if (autoclose) {
      var _this = this;

      setTimeout(function () {
        _this.closePanel();
      }, 3000);
    }
  },
  closePanel: function closePanel() {
    document.getElementById("top_panel").remove();
  }
};
var CART = [{
  title: "milk",
  price: 21.21,
  qty: 1,
  buy: false
}, {
  title: "beer",
  price: 25.25,
  qty: 5,
  buy: false
}];
CART[0].qty;
var cartAction = {
  add: function add($prod) {
    $prod.buy = false;
    var isset_prod = CART.find(function (el) {
      return el.title === $prod.title;
    });

    if (isset_prod !== undefined) {
      var new_qty = $prod.qty + isset_prod.qty;
      var prod_ind = CART.findIndex(function (el) {
        return el.title === $prod.title;
      });
      CART[prod_ind].qty = new_qty;
      CART[prod_ind].buy = false;
    } else {
      CART.push($prod);
    }
  }
};

function addToCart() {
  var title = document.getElementById("prod_name").value,
      price = parseFloat(document.getElementById("prod_price").value),
      qty = parseInt(document.getElementById("prod_qty").value);
  var valid = true;
  errMsg;

  if (title === "") {
    valid = false;
    errMsg.push("enter product name.");
  }

  if (price <= 0 || isNaN(price)) {
    valid = false;
    errMsg.push("enter product price");
  }

  if (qty <= 0) {
    valid = false;
    errMsg.push("enter product qty");
  }

  if (valid) {
    cartAction.add({
      title: title,
      price: price,
      qty: qty
    });
    document.getElementById("prod_name").value = '';
    document.getElementById("prod_price").value = '';
    document.getElementById("prod_qty").value = '1';
    document.getElementById("prod_name").focus();
    printCart();
  } else {
    topPanel.warning(errMsg.join(' '), true);
  }
}

function printCart() {
  var rez = '<ul>',
      cart_total = 0;

  for (var i = 0; i < CART.length; i++) {
    var prod = CART[i];
    var is_buy = prod.buy ? "<span class=\"badge bg-success\">&#10003;</span>" : "<span class=\"badge bg-danger\">&times;</span>";
    var prdo_total = prod.qty * prod.price;
    cart_total += prdo_total;
    rez += "\n        <li>\n            ".concat(is_buy, " <b>").concat(prod.title, "</b> ").concat(prod.qty, " x ").concat(prod.price.ToFixed(2), " =  ").concat(prod.qty * prod.price, "\n            <button type=\"button\" class=\"btn btn-info\">Buyed<button>\n        </li>\n        ");
  }

  rez += "<li><b>TOTAL</b>".concat(cart_total, "</li>");
  rez += "<ul>";
  document.getElementById("").innerHTML = rez;
}

print.cart();