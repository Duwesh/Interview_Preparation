//Promise is technically a plain javascript object which is used to find out if  async operation is completed or not.
//It represent the eventual result of an async operation.

//promise will be always either of in three state
//1.Pending State(Initial state when promise has started, i.e promise is not complete)
//2.Resolved State(when promise has been successfully resolved and produces a value)
//3.Reject State(when promise has not been successfully executed and there is some error)

//We can use async and await for handling promises in better way and also use .then and .catch

// const promise = new Promise((resolve, reject) => {
//   let status = true;
//   if (status) {
//     setTimeout(resolve("Promise has been fullfilled!"), 2000);
//   } else {
//     reject("Something went wrong!");
//   }
// });

// promise
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

var name = "Ajay";

function printDetails() {
  console.log(this.name);
}

var person = {
  name: "dk",
  company: "masai",
  print: printDetails,
};

// person.print();
// printDetails();
