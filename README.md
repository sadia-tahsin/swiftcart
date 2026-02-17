# swiftcart
1) What is the difference between null and undefined?
   
   ans: 'null' is a value intentionally assigned to any variable. Its type is 'object'.
   Undefined is a automatically assigned term/value to any variable that has been declared but not assigned any value.
   Example: let a;
    console.log(a); //undefined
   
2) What is the use of the map() function in JavaScript? How is it different from forEach()?
   
ans: map() function returns a new array. forEach() does not return anything.


3) What is the difference between == and ===?
   
   ans: '==' compares only the values. '===' compares both types and values of the variables.
   example: 5 == "5"   // true, Converts types automatically (type coercion)
   5 === "5"  // false

4) What is the significance of async/await in fetching API data?
   
   ans: 'async/await' makes async code look synchronous and easier to read. Better error handling with try/catch as it is cleaner than .then chains. Example:
   try {
  const res = await fetch(url);
} catch (error) {
  console.log("Error:", error);
}
   
5) Explain the concept of Scope in JavaScript (Global, Function, Block).
   
ans: Scope means where variables are accessible.

1. Global Scope
Declared outside any function/block.
let name = "John";
function greet() {
  console.log(name);
}
Accessible everywhere.

3. Function Scope
Variables declared inside a function.
function test() {
  let age = 25;
}
console.log(age); 
Only accessible inside that function.

4. Block Scope
   
Variables declared with let or const inside {}

if (true) {
  let x = 10;
}

console.log(x); 

let and const are block-scoped.
var is NOT block-scoped.


