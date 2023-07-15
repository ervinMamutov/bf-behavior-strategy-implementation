console.time('passingArray');

const passingArray = (arr) => {
  const newArray = [...arr];
  const returnArray = [];
  for (const value of newArray) {
    for (const key in value) {
      if (key === 'pass') {
        if (value[key] === true) {
          returnArray.push(value);
        }
      }
    }
  }
  return returnArray;
};
console.timeEnd('passingArray');
console.log(passingArray([{ pass: true }, { pass: true }]));

console.time('passingArray2');
const passingArray2 = (arr) => {
  return [...arr].filter((value) => value.pass === true);
};
console.timeEnd('passingArray2');

console.log(passingArray2([{ pass: true }, { pass: true }]));
