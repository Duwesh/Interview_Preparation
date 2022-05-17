//IIFE stand for Immediately Invoked function expression, It is simply a javascript function which runs or gets executed as soon as
// it is defined.

//Use Case
//1. Do not pollutate the global object and provides data privacy,
//      # since, the function and variable inside IIFE are only accessible to that function and are not accessible outside of the
//      function, so it kinds of provide data privacy and do not pollutate the global object.
//      # Do not involved in variable collision

//2. Fast performance
//      # since, because of the scope function looks the variable inside its scope first and then checks in the scope chain,
//      but in case of IIFE , it only checks in that function expression that is kind of provide fast performance in comparision
//      of normal function defination.

//3. Less memory consumption and optimised memory
//      # since, var and function defined in IIFE are accessible in its scope only and it gets executed once and after the execution
//      var and function are available for the garbage collection so this kinds of provide the optimised memory.

//4. Real life use case when, we want to set the theme according to user device then in that case we want to run this func only
//  once , so in that case we can use IIFE


let school = "MASAI";

(function (a, b) {
  let name = "duwesh";
  console.log(`${name} ${a}`);
  //accessing the global object variable
  console.log(school);
})(4, 5);

//throw error, Reference Error
// console.log(name);
