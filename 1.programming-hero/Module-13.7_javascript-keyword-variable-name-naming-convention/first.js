// 1. no keyword as variable name
// var var = 25; // invalid

// 2. no number at the beginning
// var 5age = 30; // invalid

// 3. no space in variable name
// var my age = 35; // invalid

// 4. no hyphen (-) in variable name
// var my-age = 40; // invalid
// correct variable names
var myAge = 30;
var _myAge = 35;
var $myAge = 40;
var myage1 = 45;
console.log(myAge);
console.log(_myAge);
console.log($myAge);
console.log(myage1);
// case sensitive
var city = "Dhaka";
var City = "Chittagong";
console.log(city);
console.log(City);

// how to write valid variable names
var userName = "user123";
console.log(userName);
var _user_name = "user_123";
console.log(_user_name);
var $userName = "user$123";
console.log($userName);
var userName1 = "userName1";
console.log(userName1);

//sankey case
var user_name = "user_name_example";
console.log(user_name);

//camel case
var userNameExample = "userNameExample";
console.log(userNameExample);

// Pascal case
var UserNameExample = "UserNameExample";
console.log(UserNameExample);

// reserved words
// var function = "myFunction"; // invalid
var myFunction = "myFunction"; // valid
console.log(myFunction);

// follow naming conventions
var firstName = "John";
var lastName = "Doe";
console.log(firstName);
console.log(lastName);

var first_name = "Jane";
var last_name = "Smith";
console.log(first_name);
console.log(last_name);
var FirstName = "Alice";
var LastName = "Johnson";
console.log(FirstName);
console.log(LastName);
var firstname = "Bob";
var lastname = "Brown";
console.log(firstname);
console.log(lastname);
