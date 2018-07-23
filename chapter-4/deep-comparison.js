function deepEqual(a, b) {

  if (a === b) {
    return true;
  }


  if ((typeof a != 'object' || a === null)  && (typeof b != 'object' || b === null)) {
    return false;
  }

  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  if (keysA.length != keysB.length) {
    return false;
  }

  for (let i = 0; i < keysA.length; i++) {

    if (!keysA.includes(keysB[i])) {
      return false;
    } else {
      return deepEqual(a[keysA[i]], b[keysB[i]]);
    }

  }
}