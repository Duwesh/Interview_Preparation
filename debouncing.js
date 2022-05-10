let count = 0;

//fetch func
function fetch() {
  console.log("fetching data...", count++);
}

//debounce func
function debounce(cb, delay) {
  let timer;
  return function () {
    if (timer) clearTimeout(timer);
    else setTimeout(cb, delay);
  };
}

let optimisedFunc = debounce(fetch, 1000);
// console.log(typeof optimisedFunc);
optimisedFunc();
// fetch();
