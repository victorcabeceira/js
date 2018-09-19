console.log(soma(3,4))
// function declaration
function soma(x, y) {
  return x + y
}

// function expression - só pode chamar a função após sua declaração
const sub = function (x, y) {
  return x - y
}
console.log(sub(3, 4))

// named function expression - só pode chamar a função após sua declaração
const mult = function mult(x, y) {
  return x * y
}
console.log(mult(3, 4))
