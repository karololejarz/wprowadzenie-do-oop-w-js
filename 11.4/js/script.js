function Phone(brand, model, price, color, diagonal) {
	this.brand = brand;
	this.model = model;
	this.price = price;
	this.color = color;
	this.diagonal = diagonal;
}
Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand
	+ ", model is " + this.model
	+ ", color is " + this.color
  + ", diagonal is " + this.diagonal
  + " and the price is " + this.price + ".");
}
Phone.prototype.installmentInfo = function() {
  console.log("Buy your " + this.model + " for " + this.price
    + " or in 50 installments of: " + (this.price/50));
}

var iPhone6S = new Phone("Apple", "iPhone 6S", 2098, "silver",
	'4.7"');
var samsungGalaxyS6 = new Phone("Samsung", "Galaxy S6", 1799, "gold",
  '5.1"');
var onePlusOne = new Phone("OnePlus", "One", 1299, "black", '5.5"');

iPhone6S.printInfo();
iPhone6S.installmentInfo();
samsungGalaxyS6.printInfo();
samsungGalaxyS6.installmentInfo();
onePlusOne.printInfo();
onePlusOne.installmentInfo();