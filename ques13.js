//13 . Deep merge two nested objects
// oUTPUT:- { a: { x: 1, y: 3, z: 4 } }

function deepMerge(obj1, obj2) {
  let result = { ...obj1 };
  for (let key in obj2) {
    if (obj2[key] instanceof Object && key in result) {
      result[key] = deepMerge(result[key], obj2[key]);
    } else {
      result[key] = obj2[key];
    }
  }
  return result;
}
console.log(deepMerge({ a: { x: 1, y: 2 } }, { a: { y: 3, z: 4 } }));

