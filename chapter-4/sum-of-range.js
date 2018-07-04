function range(start, end, step = 1) {
  const rangeArray = [];

  if (step < 0) {
    for (let i = start; i >= end; i+=step) {
      rangeArray.push(i);
    }
  } else {
    for (let i = start; i <= end; i+=step) {
      rangeArray.push(i);
    }
  }

  return rangeArray;
}

function sum(numbers) {
  let total = 0;

  for (let number of numbers) {
    total = total + number;
  }

  return total;
}