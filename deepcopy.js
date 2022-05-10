let obj = {
  name: "duwesh",
  roll: 18,
  school: "RGU",
};

//shallow copy for non-primitive data type
// let copied_obj = obj;

// console.log(copied_obj);
// console.log(obj);

//using json obj property
// let json_copy = JSON.parse(JSON.stringify(obj));
// json_copy.name = "rupesh";
// console.log(json_copy, obj);
// console.log(json_copy === obj);

let obj_copy = Object.assign(obj);
obj_copy.name = "sarbesh";

console.log(obj);
console.log(obj_copy);

function deep(obj) {
  //If primitive type then simply return the obj
  if (typeof obj !== "object" || typeof obj === null) {
    return obj;
  }
  //either obj or array
  let copy = Array.isArray(obj) ? [] : {};

  //FOR IN LOOP works for both obj and arr
  for (let key in obj) {
    let val = obj[key];
    copy[key] = deep(val);
  }
  return copy;
}

// let copied = deep(obj);
// copied.name = "naresh";
// console.log(copied);
// console.log(obj);
