let express = require("express");
let cors = require("cors");
const { resolve } = require('path');

let app = express();
const port = 3000;
app.use(cors());

let taxRate = 5; 
let discountPercentage = 10; 
let loyaltyRate = 2;

app.use(express.static('static'));

app.get('/calculate-tax', (req, res) => {
  let cartTotal = parseFloat(req.query.cartTotal);
  let taxAmount = cartTotal * (taxRate / 100);
  res.send(taxAmount.toString());
});

app.get('/estimate-delivery', (req, res) => {
  let shippingMethod = req.query.shippingMethod;
  let distance = parseFloat(req.query.distance);
  let deliveryDays;

  if (shippingMethod.toLowerCase() === 'standard') {
    deliveryDays = Math.ceil(distance / 50);
  } else if (shippingMethod.toLowerCase() === 'express') {
    deliveryDays = Math.ceil(distance / 100);
  } else {
    return res.status(400).send('Invalid shipping method');
  }

  res.send(deliveryDays.toString());
});

app.get('/shipping-cost', (req, res) => {
  let weight = parseFloat(req.query.weight);
  let distance = parseFloat(req.query.distance);
  let shippingCost = weight * distance * 0.1;
  res.send(shippingCost.toString());
});

app.get('/loyalty-points', (req, res) => {
  let purchaseAmount = parseFloat(req.query.purchaseAmount);
  let loyaltyPoints = purchaseAmount * loyaltyRate;
  res.send(loyaltyPoints.toString());
});

app.get('/cart-total', (req, res) => {
  let newItemPrice = parseFloat(req.query.newItemPrice)
  let cartTotal = parseFloat(req.query.cartTotal)
  let totalPrice = newItemPrice + cartTotal
  res.send(totalPrice.toString())  // Remove the 's' at the end of this line
});

app.get('/membership-discount', (req, res) => {
  let newItemPrice = parseFloat(req.query.cartTotal)
  let isMember = req.query.isMember === 'true'  // Changed to string comparison
  let totalPrice;
  if(isMember){
    totalPrice = newItemPrice - newItemPrice*(discountPercentage/100)
  }
  else{
    totalPrice = newItemPrice
  }
  res.send(totalPrice.toString())
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});