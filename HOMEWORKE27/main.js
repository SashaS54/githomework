
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






let CART = [];

const cartAction = {
  add:function($prod) {
    $prod.buy = false;
  let isset_prod = CART.find((el)=>el.title==$prod.title)
    if(isset_prod!==undefined) {
      let new_qty = $prod.qty + isset_prod.qty;
      const prod_ind = CART.findIndex((el)=> el.title ===$prod.title);
        CART[prod_ind].qty = new_qty;
        CART[prod_ind].bue = false;
    }else {
      CART.push($prod); 
    }
  },

  buyed(k) {

    if(CART[k].buy){
      CART[k].buy = false;
    }else {
      CART[k].buy = true
    }
    printCart();
  },
  remove(k) {

    if(!CART[k].buy) {
      if(confirm("realy delete produt:" + CART[k].title+"?")) {
        CART.splice(k, 1)
        printCart()
      }else {
        topPanel.warning("product already buyed", true)
      }
    }
  },
  maxTotal() {
    debugger
    let max_key = 0;
    let max_total = CART[0].price * CART[0].qty;
    for (let i = 1; i<CART.length; i++) {
      if((CART[i].price*CART[i].qty)>max_total) {
        max_total = CART[i].price* CART[i].qty;
        max_key = 1;
      }
    }
    return {
      title:CART[max_key].title,
      total:max_total
    };
  }
};


function maxTotalProduct() {
  debugger
  const prod = cartAction.maxTotal();
  const rez = `
  <p><b>${prod.title}</b> : ${prod.total.toFixed(2)}</p>
  `;
  document.getElementById("max_prod").innerHTML = rez;
}

function addToCart() {
 
    let title = document.getElementById("prod_name").value;
    let price = parseFloat(document.getElementById("prod_price").value);
    let qty = parseInt(document.getElementById("prod_qty").value);
    let valid = true;
    let errMsg = [];

    if( title === '') {
        valid = false
        errMsg.push("enter product name")
    }
    if( isNaN(price)|| price<=0) {
        valid = false
        errMsg.push("enter product price")
    }
    if (qty <=0 || isNaN(qty)) {
        valid = false
        errMsg.push("enter product qty ")
    }
    if(valid) {
      cartAction.add({
          title:title,
          price:price,
          qty:qty, 
      })
        document.getElementById("prod_name").value = '';
        document.getElementById("prod_price").value = '';
        document.getElementById("prod_qty").value = '1';
        document.getElementById("prod_name").focus();
        printCart()
    }else {
        topPanel.warning(errMsg.join(''),true)
    }

}











function printCart() {

  let rez = '<ul style="list-style:none;">';
  let cart_total = 0
  for(let i = 0; i<CART.length; i++) {
    let prod = CART[i];
    const is_buy = prod.buy?`<span class=" badge badge-success">&#10003;</span>`:`<span class="badge badge-danger">&times;</span>`
    const prod_total = prod.qty*prod.price
    rez += `
    <li>${is_buy}<b>${prod.title}</b>${prod.qty} x ${prod.price.toFixed(2)} = ${prod_total.toFixed(2)}</li>
    <button type="button" class="btn btn-info btn-sm" onclick="cartAction.buyed(${i})">Buyed</button>
    <button type="button" class="btn btn-danger btn-sm" onclick="cartAction.remove(${i})">delete</button>
    
    `
    
    cart_total += prod_total;
   
  }
  rez += `<li><b>TOTAL:${cart_total.toFixed(2)}</b></li>`
  rez += `<li><b>Avg: </b>${((cart_total/(CART.length + 0.000000001))).toFixed(2)}</li>`
  rez += '</ul>';

  document.getElementById("cart_list").innerHTML = rez;
}




let STYLE = [];

function add() {
    let style_name = document.getElementById("name").value;
    let style_value = document.getElementById("style").value;
    STYLE.push({
        style_name:style_name,
        style_value:style_value
    });
    document.getElementById("name").value = '';
    document.getElementById("style").value = ''
}

function styleq() {
    let text = document.getElementById("text").value;
    let style = '';
    for(let i = 0;i< STYLE.length; i++) {
        style+= `${STYLE[i].style_name}:${STYLE[i].style_value};`
    }
    text = `<p style="${style}">${text}</p>`
    document.getElementById("text_area").innerHTML = text;
}




let klasu = [
  {
    name:"first",
    plases: "20",
    facult: "fizika",
  },
  {
    name:"second",
    plases: "13",
    facult: "matematika",
  },
  {
    name:"third",
    plases: "17",
    facult: "informatika",
  },
  {
    name:"fourth",
    plases: "19",
    facult: "literatura",
  },

];


function vivesti_vse() {
    let klas = `<ul style="list-style:none">`
    for(let i = 0; i<klasu.length; i++) {

        klas += `<li style="padding-bottom: 20px">
                    <ul style="list-style:none">
                        <li><b>Name</b>:${klasu[i].name}</li>
                        <li><b>plases</b>:${klasu[i].plases}</li>
                        <li><b>facult</b>:${klasu[i].facult}</li>
                    </ul>
                 </li>` 
    }
    klas += `</ul>`;
    document.getElementById("auditores").innerHTML = klas;
}


function search() {
    let klas = `<ul style="list-style:none">`
    for(let i = 0; i<klasu.length; i++) {
        if (klasu[i].facult === document.getElementById("search").value) {

            klas += `<li style="padding-bottom: 20px">
            <ul style="list-style:none">
                <li><b>Name</b>:${klasu[i].name}</li>
                <li><b>plases</b>:${klasu[i].plases}</li>
                <li><b>facult</b>:${klasu[i].facult}</li>
            </ul>
         </li>` 
        }
    }
    klas += `</ul>`;
    document.getElementById("search_rezult").innerHTML = klas
}

function search_2() {
    debugger
    let klas = `<ul style="list-style:none">`
    for(let i = 0; i<klasu.length; i++) {
        if (klasu[i].facult === document.getElementById("search_2_facult").value|| klasu[i].name === document.getElementById("search_2_name").value || klasu[i].plases  === document.getElementById("search_2_plases").value) {
            klas += `<li style="padding-bottom: 20px">
            <ul style="list-style:none">
                <li><b>Name</b>:${klasu[i].name}</li>
                <li><b>plases</b>:${klasu[i].plases}</li>
                <li><b>facult</b>:${klasu[i].facult}</li>
            </ul>
         </li>` 
        }
    }
    klas += `</ul>`;
    document.getElementById("search_rezult_2").innerHTML = klas
}

function sort_name () {
    klasu.sort(function(a,b){
        if (a.name < b.name) {
            return 1
        }
        if (a.name > b.name) {
            return -1
        }
        if (a.name = b.name) {
            return 0;
        }
    });
    vivesti_vse()
}


function sort_number () {
    klasu.sort(function(a,b){
        if (a.plases < b.plases) {
            return 1
        }
        if (a.plases > b.plases) {
            return -1
        }
        if (a.plases = b.plases) {
            return 0;
        }
    });
    vivesti_vse()
}