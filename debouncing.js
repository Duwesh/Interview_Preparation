let count = 0;

//fetch func
function fetch() {
  console.log("fetching data...", count++);
}

//debounce func
function debounce(cb, delay) {
  var timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}

let optimisedFunc = debounce(fetch, 100);

// Debouncing for button
let btn = document.getElementById("btn");
let total = 0;

function debouncer(cb, delay) {
  var timer;
  return function (...args) {
    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}

btn.addEventListener(
  "click",
  debouncer(() => {
    alert("Payment Successfull");
    // console.log("clicked", total++);
  }, 1000)
);
