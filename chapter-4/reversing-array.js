function reverseArray(arr) {
  const newArr = [];

  for (let element of arr) {
    newArr.unshift(element);
  }

  return newArr;
}

function reverseArrayInPlace(arr) {
  let temp;

  for (let i = 0; i < arr.length / 2; i++) {
    temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }

  return arr;
}