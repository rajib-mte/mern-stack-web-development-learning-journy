const friends = ["balam", "kalam", "salam", "karim", "rahim", "khailam"];
console.log(friends);

// --------- Check element in the Array: includes() methods ----------------
console.log(friends.includes("balam"));

if (friends.includes("khailam")) console.log("dinar done!");
else console.log("no dinner");

// ----------- get index in the array: indexOf() methods ----------------
console.log(friends.indexOf("khailam"));
console.log(friends.indexOf("tomato"));

// -------------  Array.isArray() methods ------------------
const food = "ros o gol la";
const age = 15;

console.log(Array.isArray(friends));
console.log(Array.isArray(food));
// console.log(Array.isArray(num));
console.log(Array.isArray(age));

// ------------ join() ------------------
console.log("------------ join() ------------------");
var joinArray = ["rajib", "hasan", "rakib", "hasan"];
console.log(joinArray);
console.log(joinArray.join("+"));

// ------------ concat() ------------------
console.log("\n------------ concat() ------------------");
var data1 = [1, 2, 3, 4, 5];
var data2 = [6, 7, 8, 9, 10];

console.log(data1.concat(data2));

// ------------ slice() ------------------
console.log("\n------------ slice() ------------------");
var sliceArray = [1, 2, 3, 4, 5];
console.log(sliceArray.slice(2, 4));

// ------------ splice() ------------------
console.log("\n------------ splice() ------------------");
var spliceArray2 = [1, 2, 3, 4, 5, 6, 7];
console.log(spliceArray2);
console.log(spliceArray2.splice(4, 2));

var spliceArray = [1, 2, 3, 4, 5, 6, 7];
console.log(spliceArray);
console.log(spliceArray.splice(2));
