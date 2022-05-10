//Closure is a phenomenon in JS, in which we can access the var of outer func in the inner func, in other words inner func
//preserve the var of outer func in its scope
//When a function is bundled together with its own scope and its parent scope or lexical scope is callled closure.

function outer() {
  //var is outer scope
  let name = "Duwesh";
  return function inner() {
    //this is inner scope, it will check in its local scope first , then parent scope
    return `Hello ${name}`;
  };
}

let ans = outer();
console.log(ans());
