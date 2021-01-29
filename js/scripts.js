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
  return price;
}




$(document).ready(function (){
  $("#pizzaForm").submit(function(event){
    event.preventDefault();
    let toppings = [];
    const size = $("input:radio[name=size]:checked").val();
    $("input:checkbox[name=toppings]:checked").each(function(){
      const item = $(this).val();
      toppings.push(item);
    });
    newPizza = new Pizza(size, toppings);
    let price = newPizza.pizzaPrice();
    $(".pizzaSize").text(size);

    for( let i=-1; i < toppings.length; i++) {
      $(".pizzaToppings").text(toppings);
    }


    $(".pizzaCost").text(price);

    $(".pizzaOrder").show();
  })
})