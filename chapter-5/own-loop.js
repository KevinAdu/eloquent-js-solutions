function loop(value, test, update, body) {
  for (let i = value; test(i); i = update(i)) {
    body(i);
  }
}

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