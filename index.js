var cart = [];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var newItem = {};
 newItem[item] = getRandomInt(1,100)
 cart.push(newItem)
 console.log(`${item} has been added to your cart.`)
 return cart

}

function viewCart() {
  if(cart.length === 0) {
    console.log("Your shopping cart is empty.")
    return "Your shopping cart is empty."
  }
  var sentence = "In your cart, you have"
  var cartItems = []
  for(var element in cart) {
    cartItems.push(` ${Object.keys(cart[element])} at $${Object.values(cart[element])}`);
    if(cart.length > 2 && element < cart.length - 1){
      cartItems.push(",");
    }
  }

  if(cartItems.length > 1) {
  cartItems[cartItems.length - 1] = ` and${cartItems[cartItems.length - 1]}`
  };
  cartItems[cartItems.length - 1] = `${cartItems[cartItems.length - 1]}.`
  for(var element in cartItems) {
    sentence += cartItems[element]
  }
  console.log(sentence);
  return sentence
}

function total() {
  var total = 0
  for (var idx in cart) {
    total += Object.values(cart[idx])[0]
  }
  return total
}

function removeFromCart(item) {
  if(cart.length === 0){
    console.log("That item is not in your cart.")
    return "That item is not in your cart."
  }
  var cartItems = []
  for (var idx in cart){
    cartItems.push(Object.keys(cart[idx])[0])
  }
  var indexOfItemToRemove = cartItems.indexOf(item)
  if(indexOfItemToRemove === null){
    console.log("That item is not in your cart.")
    return "That item is not in your cart."
  }
  cart.splice(indexOfItemToRemove, 1)
  return cart
}

function placeOrder(cardNumber) {
  if(cardNumber === undefined){
    console.log("Sorry, we don't have a credit card on file for you.")
    return "Sorry, we don't have a credit card on file for you."
  }
  var cartTotal = total()
  console.log(`Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`)

  cart = []
}
