# *Pizza Time*
by Geof Rosenmund   
A demonstration of objects using constructors and properties.

## **Technologies Used**
* HTML
* JavaScript
* JQuery
* CSS
* Bootstrap

## **Description**

This is a simple webpage that takes a size and toppings array and creates a Pizza object. It then uses a prototype function to evaluate the contents of the object and spit out a price. It then displays the size, toppings, and price of the pizza ordered.

## **Testing**

### **Test 1**
Describe: Pizza();   
Test: A constructor for creating a pizza object   
Expect: Pizza().toEqual Pizza{size, [toppings]}   

### **Test 2**
Describe: Pizza.prototype.pizzaPrice();   
Test: Determine price of pizza by checking size and toppings.length   
Expect pizzaPrice(small, [Pepperoni, Olives]).toEqual "13"

### **Test 3**
Describe: Order();   
Test: Add multiple pizzas to one object   
Expect Order().toEqual Order{pizza1, pizza2}   

### **Test 4**
Describe: pizzaPizza();   
Test: Pull information additional times from the form creating more pizzas that can be priced and displayed   
Expect pizzaPizza().toEqual newOrder.pizzas {{1:pizza, 2:pizza} Toppings: 2 arrays, currentId: 2} 

## **Setup/Installation**
* Clone the repository to your desktop from GitHub
* Navigate to the top level of the directory
* Open the index.html file in a browser

## **GitHub Link**
Repository: https://github.com/CrankyJones/PizzaTime

## **Known Bugs**
There are no known bugs at this time.

## **License**
[MIT](https://opensource.org/licenses/MIT)
Copyright (c) [2021] [Geof Rosenmund]

## **Contact Information**
Geof Rosenmund (geof.rosenmunds.email@gmail.com)