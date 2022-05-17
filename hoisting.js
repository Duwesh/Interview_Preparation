// //1. Hoisting is the phenomenon is js, in which we can access the var and func even before we have initialised some val to them
// //2. In simple words moving up the var and func declaration to the top of the program is called hoisting and It happens during the memory creation phase
// //3. var is hoisted in global scope with undefined val
// //4. func are also hoisted and the whole func declaration is kept in the memory
// //5. let and const are hoisted in the temporal dead zone
// //6. TDZ is time betw the var is declared and it is initialised with some value, it will remain in the TDZ
// console.log(fname);
// let name = "duwesh";

// //var is hoisted, and we can access the variable even before we have initialised some value to them.
// var fname = "dk";

// //*********** Function ************

// //1.Functions are treated as first class citizen in JS.
// //2.We can assign function to some other variable, we can pass them as argument to other var and also we can return func
// //from other func

// //function declaration / function statement
// //They are Hoisted
// function name(name) {
//   return name;
// }

// //function expression
// //We cannot access them before initilisation
// let square = (num) => {
//   return num * num;
// };

// //anonymous function
// //We cannot have only anonymous func, we must have to assign to some var.
// let name = function (name) {
//   return name;
// };


let person = {
  name: "duwesh",
  last: "kumar",
  walk: function(){
    console.log("Walking");
  }
}

// let newObj = JSON.parse(JSON.stringify(person));
// let newObj = {...person};
// let newObj = Object.assign({}, person);

// let newObj = Object.create(person);