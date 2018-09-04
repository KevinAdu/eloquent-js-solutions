function every(array, test) {
  let every = true;

  for (let elem of array) {
    if (!test(elem)) {
      every = false;
      break;
    }
  }

  return every;
}

function every(array, test) {
  return !array.some(element => !test(element));
}