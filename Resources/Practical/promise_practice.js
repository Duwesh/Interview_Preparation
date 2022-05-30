//lets create promise
let promise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise is resolved now!");
      console.log("second");
    }, 1000);
    console.log("First");
  });
};

// console.log(
//   promise().then((msg) => {
//     console.log(msg);
//   })
// );

//promise .then/.catch
async function someFunc(flag) {
  return new Promise((resolve, reject) => {
    if (flag) {
      setTimeout(() => {
        resolve("Hello world");
      }, 1000);
    } else {
      reject("Error");
    }
  });
}

// console.log(someFunc());
// someFunc(true)
//   .then((msg) => {
//     console.log(msg);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// async / await
async function calc() {
  try {
    const res = await someFunc(false);
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}

// console.log(calc);

let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("first promise rejected");
  }, 2000);
});

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("second promise");
  }, 1000);
});

let promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("third promise resolve");
  }, 3000);
});

//promise all example
// Promise.all([promise1, promise2, promise3])
//   .then((res) => {
//     console.log(res);
//     res.forEach((item) => {
//       console.log(item);
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//promise.race either resolve or rejected
// Promise.race([promise1, promise2, promise3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//promise.any example
// Promise.any([promise1, promise2, promise3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

async function code() {
  try {
    const resOne = await Promise.race([promise1, promise2, promise3]);
    console.log(`resOne`, resOne);
    const res = await Promise.any([promise1, promise2, promise3]);
    console.log(`resOne`, res);
  } catch (err) {
    console.log(`err`, err);
  }
}

code();
console.log("after fun");
