export function getRandom(min, max) {
  return Math.trunc(Math.random() * (max - min + 1)) + min;
}
