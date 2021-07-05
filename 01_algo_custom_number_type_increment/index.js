// whithout recursive
const increment = (arrayDigit) => {
  const length = arrayDigit.length - 1;

  if (arrayDigit[length] === 9) {
    let next = true;
    for (let i = length; i >= 0; i--) {
      if (next) {
        if (arrayDigit[i] === 9) {
          arrayDigit[i] = 0;
          next = true;
        } else {
          arrayDigit[i] = arrayDigit[i] + 1;
          next = false;
        }
      }
    }
  } else {
    arrayDigit[length]++;
  }

  return arrayDigit;
};

const result = increment([1, 9, 2, 9]);
console.log(result);

// with recursive
const incrementR = (arrayDigit, i) => {
  let length = typeof i === "undefined" ? arrayDigit.length - 1 : i;

  if (arrayDigit[length] === 9) {
    arrayDigit[length] = 0;
    length--;
    return incrementR(arrayDigit, length);
  }

  arrayDigit[length]++;
  return arrayDigit;
};

const resultR = incrementR([1, 9, 9, 9]);
console.log(resultR);
