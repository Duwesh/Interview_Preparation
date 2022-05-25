//Array
let arr = [1, 2, 3, 4, 5];

// console.log(arr.map((num, idx, arr) => {
//     return num * num;
// }));

//arr.map((num) => num * num)
//custom MAP Function
Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    //currElem, idx, arr
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

//square func
let square = (num) => {
  return num * num;
};

let ans = arr.myMap(square);
console.log("custom map", ans);

//arr.filter(curr, i, arr)
Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      temp.push(this[i]);
    }
  }
};

//arr.reduce((acc, curr, idx, arr) => {acc +curr}, initialValue);

Array.prototype.myReduce = function (cb, initialValue) {
  var acc = initialValue;
  for (let i = 0; i < this.length; i++) {
    //check for acc val
    acc = acc ? cb(acc, this[i], i, this) : this[i];
    // cb(acc, this[i], i, this);
  }
  return acc;
};

//Promise.all polyfill
function myPromiseAll(taskList) {
  //to store the results
  const results = [];

  //to track how many promises has completed
  let promisesCompleted = 0;

  //return new promise
  return new Promise((resolve, reject) => {
    taskList.forEach((currPromise, index) => {
      //if promises passes
      currPromise
        .then((val) => {
          //store its outcome and increment the count
          results[index] = val;
          promisesCompleted += 1;

          //if all promises are completed ,
          //resolve and return the result
          if (promisesCompleted === taskList.length) {
            resolve(results);
          }
        })
        //If any promise fails, reject
        .catch((err) => {
          reject(err);
        });
    });
  });
}

//Example for testing our promises
function task(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(time);
    }, time);
  });
}

const taskList = [task(1000), task(2000), task(3000)];

//run promise.all
myPromiseAll(taskList)
  .then((res) => {
    console.log("got results", res);
  })
  .catch((err) => console.log(err));

//Differnce betw map and foreach

//1. map iterates over  the original array and return the new array whereas foreach doesnot return any new array
//2. we can chain map with different func but we cannot chain foreach since it return undefined
//3. Both are array methods only
