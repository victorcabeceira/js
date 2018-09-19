//higher order function

//literal
function func1() {}

// armazenar em uma variável
const func2 = function () {}

// armazenar em um array
const array = [function (a,b) { return a + b}, func1, func2]
console.log(array[0](3,5))

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () {
  return 'Opa'
}
console.log(obj.falar())

//  passar função como parametro
function run(fun){
  fun()
}

run(function() { console.log('Executando...')})

// Uma função pode retornar/conter uma função
function soma(a,b) {
  return function(c) {
    console.log(a + b + c)
  }
}

soma(2, 3)(4)