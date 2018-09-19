// taggedTemplates - process the template inside a function
function toDollar(parts, ...values) {
  const result = []
  values.forEach((value, index) => {
    value = isNaN(value) ? value : `$${value.toFixed(2)}`
    result.push(parts[index], value)
  })
  return result.join('')
}

const price = 49.99
const installment = 10
console.log(toDollar `1x of ${price} or 5x of ${installment}.`)