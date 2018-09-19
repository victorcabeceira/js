function rand({ min = 0, max = 1000 }) {
  return Math.floor(Math.random() * (max - min) + min);
}

function rand2([min = 0, max = 1000]) {
  if (min > max) [min, max] = [max, min]
  return rand({ min, max})
}

console.log(rand2([1500]))

