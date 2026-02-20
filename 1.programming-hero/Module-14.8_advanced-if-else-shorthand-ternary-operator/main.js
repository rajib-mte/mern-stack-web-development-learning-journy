/*
 * Ternary --> three parts
 * condition ? True : False
 */

var age = 19;

age >= 18 ? console.log("Vote Dio") : console.log("Ghumai thako");

let price = 500;
const isLeader = false;

price = isLeader === true ? (price = 0) : (price += 100);
console.log(price);
price = isLeader == true ? (price > 1000 ? price / 2 : 0) : price + 1000;

console.log(price);
