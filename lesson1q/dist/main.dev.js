"use strict";

var beast = new Animal({
  name: 'Gena',
  color: 'Green',
  age: 3
});
var beast2 = new Animal({
  name: 'Cheburashka',
  color: 'Brown',
  age: 2
});
var cat = new Cat({
  name: "Murka",
  color: "black",
  age: 3,
  weight: 4
});
console.log(Cat);
cat.fullInfo(document.getElementById("info"));
var cat2 = new Cat({
  name: "Losos",
  color: 'ginger',
  age: 5,
  weight: 6
});
cat2.fullInfo(document.getElementById("info2"));
var redText = new PrintMachine({
  size: 16,
  color: "red",
  family: "Arial"
});
redText.print("Lorem ipsum");
var Greentext = new PrintMachine({
  size: 32,
  color: "green",
  family: "Couier New"
});
Greentext.print(" LoremLoremLoremLoremLoremLoremLorem");