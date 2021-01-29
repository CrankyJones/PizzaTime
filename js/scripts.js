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

function listToppings() {

}



$(document).ready(function (){
  $("#pizzaForm").submit(function(event){
    event.preventDefault();
    let toppings = [];
    let toppingsList = "";
    const size = $("input:radio[name=size]:checked").val();
    $("input:checkbox[name=toppings]:checked").each(function(){
      const item = $(this).val();
      toppings.push(item);
    });
    newPizza = new Pizza(size, toppings);
    let price = newPizza.pizzaPrice();
    $(".pizzaSize").text(size);

    for( let i=0; i < toppings.length; i++) {
      toppingsList += toppings[i] + "   ";
    }
    $(".pizzaToppings").text(toppingsList);

    $(".pizzaCost").text(price);

    $(".pizzaOrder").show();
  })
})