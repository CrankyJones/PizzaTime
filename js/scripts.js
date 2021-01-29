function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.pizzaPrice = function () {
  let price = 0;
  if (this.size === "Small") {
    price += 12;
  } else if (this.size === "Medium") {
    price += 14;
  } else {
    price += 16;
  }
  let numToppings = this.toppings.length;
  let toppingsPrice = numToppings * .50;
  price += toppingsPrice;
  return price;
}