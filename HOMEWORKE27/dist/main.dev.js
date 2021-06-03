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
var CART = [];
var cartAction = {
  add: function add($prod) {
    $prod.buy = false;
    var isset_prod = CART.find(function (el) {
      return el.title == $prod.title;
    });

    if (isset_prod !== undefined) {
      var new_qty = $prod.qty + isset_prod.qty;
      var prod_ind = CART.findIndex(function (el) {
        return el.title === $prod.title;
      });
      CART[prod_ind].qty = new_qty;
      CART[prod_ind].bue = false;
    } else {
      CART.push($prod);
    }
  },
  buyed: function buyed(k) {
    if (CART[k].buy) {
      CART[k].buy = false;
    } else {
      CART[k].buy = true;
    }

    printCart();
  },
  remove: function remove(k) {
    if (!CART[k].buy) {
      if (confirm("realy delete produt:" + CART[k].title + "?")) {
        CART.splice(k, 1);
        printCart();
      } else {
        topPanel.warning("product already buyed", true);
      }
    }
  },
  maxTotal: function maxTotal() {
    debugger;
    var max_key = 0;
    var max_total = CART[0].price * CART[0].qty;

    for (var i = 1; i < CART.length; i++) {
      if (CART[i].price * CART[i].qty > max_total) {
        max_total = CART[i].price * CART[i].qty;
        max_key = 1;
      }
    }

    return {
      title: CART[max_key].title,
      total: max_total
    };
  }
};

function maxTotalProduct() {
  debugger;
  var prod = cartAction.maxTotal();
  var rez = "\n  <p><b>".concat(prod.title, "</b> : ").concat(prod.total.toFixed(2), "</p>\n  ");
  document.getElementById("max_prod").innerHTML = rez;
}

function addToCart() {
  var title = document.getElementById("prod_name").value;
  var price = parseFloat(document.getElementById("prod_price").value);
  var qty = parseInt(document.getElementById("prod_qty").value);
  var valid = true;
  var errMsg = [];

  if (title === '') {
    valid = false;
    errMsg.push("enter product name");
  }

  if (isNaN(price) || price <= 0) {
    valid = false;
    errMsg.push("enter product price");
  }

  if (qty <= 0 || isNaN(qty)) {
    valid = false;
    errMsg.push("enter product qty ");
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
    topPanel.warning(errMsg.join(''), true);
  }
}

function printCart() {
  var rez = '<ul style="list-style:none;">';
  var cart_total = 0;

  for (var i = 0; i < CART.length; i++) {
    var prod = CART[i];
    var is_buy = prod.buy ? "<span class=\" badge badge-success\">&#10003;</span>" : "<span class=\"badge badge-danger\">&times;</span>";
    var prod_total = prod.qty * prod.price;
    rez += "\n    <li>".concat(is_buy, "<b>").concat(prod.title, "</b>").concat(prod.qty, " x ").concat(prod.price.toFixed(2), " = ").concat(prod_total.toFixed(2), "</li>\n    <button type=\"button\" class=\"btn btn-info btn-sm\" onclick=\"cartAction.buyed(").concat(i, ")\">Buyed</button>\n    <button type=\"button\" class=\"btn btn-danger btn-sm\" onclick=\"cartAction.remove(").concat(i, ")\">delete</button>\n    \n    ");
    cart_total += prod_total;
  }

  rez += "<li><b>TOTAL:".concat(cart_total.toFixed(2), "</b></li>");
  rez += "<li><b>Avg: </b>".concat((cart_total / (CART.length + 0.000000001)).toFixed(2), "</li>");
  rez += '</ul>';
  document.getElementById("cart_list").innerHTML = rez;
}

var STYLE = [];

function add() {
  var style_name = document.getElementById("name").value;
  var style_value = document.getElementById("style").value;
  STYLE.push({
    style_name: style_name,
    style_value: style_value
  });
  document.getElementById("name").value = '';
  document.getElementById("style").value = '';
}

function styleq() {
  var text = document.getElementById("text").value;
  var style = '';

  for (var i = 0; i < STYLE.length; i++) {
    style += "".concat(STYLE[i].style_name, ":").concat(STYLE[i].style_value, ";");
  }

  text = "<p style=\"".concat(style, "\">").concat(text, "</p>");
  document.getElementById("text_area").innerHTML = text;
}

var klasu = [{
  name: "first",
  plases: "20",
  facult: "fizika"
}, {
  name: "second",
  plases: "13",
  facult: "matematika"
}, {
  name: "third",
  plases: "17",
  facult: "informatika"
}, {
  name: "fourth",
  plases: "19",
  facult: "literatura"
}];

function vivesti_vse() {
  var klas = "<ul style=\"list-style:none\">";

  for (var i = 0; i < klasu.length; i++) {
    klas += "<li style=\"padding-bottom: 20px\">\n                    <ul style=\"list-style:none\">\n                        <li><b>Name</b>:".concat(klasu[i].name, "</li>\n                        <li><b>plases</b>:").concat(klasu[i].plases, "</li>\n                        <li><b>facult</b>:").concat(klasu[i].facult, "</li>\n                    </ul>\n                 </li>");
  }

  klas += "</ul>";
  document.getElementById("auditores").innerHTML = klas;
}

function search() {
  var klas = "<ul style=\"list-style:none\">";

  for (var i = 0; i < klasu.length; i++) {
    if (klasu[i].facult === document.getElementById("search").value) {
      klas += "<li style=\"padding-bottom: 20px\">\n            <ul style=\"list-style:none\">\n                <li><b>Name</b>:".concat(klasu[i].name, "</li>\n                <li><b>plases</b>:").concat(klasu[i].plases, "</li>\n                <li><b>facult</b>:").concat(klasu[i].facult, "</li>\n            </ul>\n         </li>");
    }
  }

  klas += "</ul>";
  document.getElementById("search_rezult").innerHTML = klas;
}

function search_2() {
  debugger;
  var klas = "<ul style=\"list-style:none\">";

  for (var i = 0; i < klasu.length; i++) {
    if (klasu[i].facult === document.getElementById("search_2_facult").value || klasu[i].name === document.getElementById("search_2_name").value || klasu[i].plases === document.getElementById("search_2_plases").value) {
      klas += "<li style=\"padding-bottom: 20px\">\n            <ul style=\"list-style:none\">\n                <li><b>Name</b>:".concat(klasu[i].name, "</li>\n                <li><b>plases</b>:").concat(klasu[i].plases, "</li>\n                <li><b>facult</b>:").concat(klasu[i].facult, "</li>\n            </ul>\n         </li>");
    }
  }

  klas += "</ul>";
  document.getElementById("search_rezult_2").innerHTML = klas;
}

function sort_name() {
  klasu.sort(function (a, b) {
    if (a.name < b.name) {
      return 1;
    }

    if (a.name > b.name) {
      return -1;
    }

    if (a.name = b.name) {
      return 0;
    }
  });
  vivesti_vse();
}

function sort_number() {
  klasu.sort(function (a, b) {
    if (a.plases < b.plases) {
      return 1;
    }

    if (a.plases > b.plases) {
      return -1;
    }

    if (a.plases = b.plases) {
      return 0;
    }
  });
  vivesti_vse();
}