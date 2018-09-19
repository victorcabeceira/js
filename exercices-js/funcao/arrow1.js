let dobro = function (a) {
  return 2 * a
}

dobro = (a) => {
  return 2 * a
}

dobro = a => 2 * a

console.log(dobro(2))

let ola = function () {
  return 'Olá!'
}

ola = () => 'Olá'
ola = _ => 'Olá' //É um parametro, mas pode so ignorar o parametro na chamada

console.log(ola())

