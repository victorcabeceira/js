// taggedTemplates - process the template inside a function
function tag(parts, ...values) {
  console.log(parts)
  console.log(values)
  return 'Another string'
}

const student1 = 'mark'
const status = 'Approved'
console.log(tag `${student1} is ${status}`)