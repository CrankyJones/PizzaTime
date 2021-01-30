//Business Logic

function Order() {
  this.pizzas = {};
  this.totalPrice = 0;
  this.currentId = 0;
}
Order.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
}

Order.prototype.addPizza = function (pizza) {
  pizza.id = this.assignId();
  this.pizzas[pizza.id] = pizza;
}

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
  } else if (this.size === "Large") {
    price += 16;
  }
  let numToppings = this.toppings.length;
  let toppingsPrice = numToppings * .50;
  price += toppingsPrice;
  newOrder.totalPrice += price;
}
newOrder = new Order();

//UI Logic

Order.prototype.pizzaPizza = function () {
  let toppings = [];
  const size = $("input:radio[name=size]:checked").val();
  $("input:checkbox[name=toppings]:checked").each(function () {
    const item = $(this).val();
    toppings.push(item);
  });
  newPizza = new Pizza(size, toppings);
  newOrder.addPizza(newPizza);
  newPizza.pizzaPrice();
  $(".pizzaSize").text(size);
  if (toppings.length === 0) {
    $(".pizzaToppings").append("<br>" + "You ordered a " + size + " pizza topped with: <li>Nothing</li>");
  } else {
    $(".pizzaToppings").append("<br>" + "You ordered a " + size + " pizza topped with:");
    for (let i = 0; i < toppings.length; i++) {
      $(".pizzaToppings").append("<li>" + toppings[i]) + "</li>";
    }
  };
  $(".pizzaCost").text((Math.round(newOrder.totalPrice * 100) / 100).toFixed(2));
  $(".pizzaOrder").show();
  $("#placeOrder").hide();
  document.getElementById("pizzaForm").reset();
};

$(document).ready(function () {
  $("#pizzaForm").submit(function (event) {
    event.preventDefault();
  });
});