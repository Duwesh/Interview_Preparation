let arr = [1, 2, 3, [4, 5, 6, [7, 8]]];

let flattend = function (arr) {
  let flattendArr = arr.reduce((acc, item) => {
    if (Array.isArray(item)) {
      acc = acc.concat(flattend(item));
    } else {
      //   acc.push(item);
      // acc = [...acc, item];
      acc = acc.concat(item);
    }
    return acc;
  }, []);
  return flattendArr;
};

console.log(flattend(arr));
let res = [];
let newFlattend = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      newFlattend(arr[i]);
    } else {
      res.push(arr[i]);
    }
  }
  return res;
};

console.log(newFlattend(arr));
