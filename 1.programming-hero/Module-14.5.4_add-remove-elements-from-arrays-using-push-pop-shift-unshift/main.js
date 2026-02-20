const ages = [];
const number = [12, 87, 98, 45];

// ----------- push ----------
console.log(number);
number.push(44);
number.push(45);
number.push(98, 11, 9);
console.log(number);

// --------- pop ------------

const friends = ["balam", "kalam", "salam", "karim", "rahim"];
console.log(friends);
// friends.push('khailam');
// console.log(friends);
// friends.pop();
// console.log(friends);

// const out1 = friends.pop();
// console.log(friends);
// const out2 = friends.pop();
// console.log(friends);
// console.log(out1, out2);

// --------- Shift-unshift ----------
friends.shift();
console.log(friends);
friends.unshift("gumailam");
console.log(friends);
