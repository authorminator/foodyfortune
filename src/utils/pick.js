export function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function seededShuffle(array, seed) {
  const result = [...array];
  let m = result.length;

  function random() {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
  }

  while (m) {
    const i = Math.floor(random() * m--);
    [result[m], result[i]] = [result[i], result[m]];
  }

  return result;
}
