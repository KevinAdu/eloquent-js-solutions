function arrayToList(arr) {
  let list;

  arr.forEach((elem, i) => {
    if (typeof list === 'undefined') {
      list = { value: arr[arr.length - 1], rest: null}
    } else {
      list = prepend(arr[arr.length - 1 - i], list);
    }
  });

  return list;
}

function listToArray(list) {
  let arr = [];

  while (list !== null) {
    arr.push(list.value);
    list = list.rest;
  };

  return arr;
}

function prepend(elem, list) {
  return { value: elem, rest: list};
}

function nth(list, i) {
  if (i == 0) {
    return list.value;
  else if (list === null) {
    return undefined;
  } else {
    return nth(list.rest, i - 1);
  };
}