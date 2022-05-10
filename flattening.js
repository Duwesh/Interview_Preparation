let arr = [1, 2, 3, 4, [5, 6, 7, [8, 9]]];

//Inbuild method
// console.log(arr.flat(1));

let res = [];
function flattening(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattening(arr[i]);
      //check for array
    } else {
      res.push(arr[i]);
    }
  }
}
flattening(arr);

console.log(res);
