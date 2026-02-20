const price = 5000;
const age = 5;

if (age <= 12) console.log("you can eat for free");
else if (price >= 5000) {
  //10% discount
  const discount = (price * 10) / 100;
  console.log(discount);
  const payAmount = price - discount;
  console.log(payAmount);
} else if (price >= 2500) {
  //10% discount
  const discount = (price * 5) / 100;
  console.log(discount);
  const payAmount = price - discount;
  console.log(payAmount);
} else {
  console.log(price);
}
