
const a = "foo",
    b = "bar";


const cart = {
    "Bread":1,
    "Milk":2,
    "beer":10,
    [a + '_' +b]:"fuuuuu",
    [a]:"my string",
    12:"Number"
};

cart ["butter"] = 1;

cart[b] = "my bar";

cart.Bread = null;

delete(cart.Bread);


if(typeof cart.Hello === "undefined") {
    alert("no hello");
}else {
    alert("property exists");
} 

alert(cart.hasOwnPropertyy("Hello"));

let h = '<ul>';

for(let k in cart) {
    h += `<li>${k}: ${cart}</li>`;
}

function addInCart (title, qty){
    cart[title] = qty;
    printCart();
}
function removeFromCart (title){
    delete(cart[title]);
    printCart();
}

let cartNew = {};
/*for(let k in cart) {
    cartNew[k] = cart[k];
}

cartNew = Object.assign({}, cart)
*/
cartNew = JSON.parse(JSON.stringify(cart));




cartNew.Milk = 1000;



