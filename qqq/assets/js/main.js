const topPanel = {
    info(text = "Some text here", autoclose = true) {
      this.showPanel(text, "info", autoclose);
    },
    success(text = "Some text here", autoclose = true) {
      this.showPanel(text, "success", autoclose);
    },
    danger(text = "Some text here", autoclose = false) {
      this.showPanel(text, "danger", autoclose);
    },
    warning(text = "Some text here", autoclose = false) {
      this.showPanel(text, "warning", autoclose);
    },
    showPanel(text, type, autoclose) {
      let btn = autoclose
        ? ""
        : '<button onclick="topPanel.closePanel()>&times;</button>';
      let h = `<div id="top_panel" class="panel_${type}">
          <p>${text}</p>${btn}<div></div>`;
      if (document.getElementById("top_panel") !== null) {
        this.closePanel();
      }
      document
        .getElementsByTagName("body")[0]
        .insertAdjacentHTML("afterbegin", h);
      if (autoclose) {
        const _this = this;
        setTimeout(function () {
          _this.closePanel();
        }, 3000);
      }
    },
    closePanel() {
      document.getElementById("top_panel").remove();
    },
  };





let CART = [
    {
        title:"milk",
        price:21.21,
        qty:1,
        buy:false
    },
    {
        title:"beer",
        price:25.25,
        qty:5,
        buy:false
    }
];

CART[0].qty


const cartAction = {
    add:function($prod){
        $prod.buy = false;
        let isset_prod = CART.find(
            function(el){return el.title===$prod.title;}
    );
    if(isset_prod!==undefined) {
        const new_qty = $prod.qty + isset_prod.qty;
        const prod_ind = CART.findIndex((el)=>el.title===$prod.title);
        CART[prod_ind].qty = new_qty;
        CART[prod_ind].buy = false;
    }else {
        CART.push($prod);
    }
    }
};
function addToCart() {
    const title = document.getElementById("prod_name").value,
        price = parseFloat(document.getElementById("prod_price").value),
        qty = parseInt(document.getElementById("prod_qty").value);
        let valid = true;
            errMsg
        if(title==="") {
            valid = false;
            errMsg.push("enter product name.")
        }
        if(price <=0 || isNaN(price)) {
            valid = false;
            errMsg.push("enter product price");
        }
        if(qty <=0) {
            valid = false;
            errMsg.push("enter product qty")
        }
        if(valid) {

                cartAction.add({
                    title:title,
                    price:price,
                    qty:qty
                });
            document.getElementById("prod_name").value = '';
            document.getElementById("prod_price").value = '';
            document.getElementById("prod_qty").value = '1';
            document.getElementById("prod_name").focus();
            printCart();
        }else {
            topPanel.warning(errMsg.join(' '),true)
        }
    
}



function printCart() {
    let rez = '<ul>',
        cart_total = 0;
    for(let i=0; i<CART.length; i++) {
        const prod = CART[i];
        const is_buy = prod.buy?`<span class="badge bg-success">&#10003;</span>`:`<span class="badge bg-danger">&times;</span>`
        const prdo_total = prod.qty*prod.price;
        cart_total += prdo_total;
        rez += `
        <li>
            ${is_buy} <b>${prod.title}</b> ${prod.qty} x ${prod.price.ToFixed(2)} =  ${prod.qty*prod.price}
            <button type="button" class="btn btn-info">Buyed<button>
        </li>
        `
    }
    rez += `<li><b>TOTAL</b>${cart_total}</li>`;
    rez += `<ul>`;
    document.getElementById("").innerHTML = rez
}


print.cart();