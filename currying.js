// Currying is the process of transforming a function with multiple argumnets into the sequece of function expecting single
// argument each.

//Advantages:
//  1. We can avoid passing same variable again and again
//  2. To create higher order function
//  3. To make our function pure and less prone to errors
//  4. Less prone to errors since we have a function with single argumnets

//Normal function defination
function sum(a, b) {
  return a + b;
}

//Curried Function
function sum(a) {
  return (b) => {
    return a + b;
  };
}

console.log(sum(4)(5));

//Infinite Currying using recursion
function curried(a) {
  return (b) => {
    if (b) return curried(a + b);
    return a;
  };
}

console.log(curried(4)(5)());

//Normal use case
function evaluate(operation) {
  return (a) => {
    return (b) => {
      if (operation == "add") return a + b;
      else if (operation == "subtract") return a - b;
      else if (operation == "multiply") return a * b;
      else if (operation == "divide") return a / b;
    };
  };
}

console.log(evaluate("add")(5)(5));

//Real use case of curring could in e dom event listeners
