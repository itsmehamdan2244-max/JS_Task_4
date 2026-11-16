var product = prompt("Enter Your product");
var quantity = prompt("Enter quantity");
var price = prompt("Enter price");

var total_bill = price * quantity;

var total= `
Product: ${product}
Quantity: ${quantity}
Price: ${price}
Total Bill: ${total_bill}`;

alert(total)