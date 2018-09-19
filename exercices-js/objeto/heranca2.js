// Cadeira de protótipos (prototype chain)
Object.prototype.attr0 = '0' // Não faça isso

const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B' }
const filho = { __proto__: pai, attr3: 'C' }

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

const carro = {
  velAtual: 0,
  velMax: 253,
  acelerarMais(delta) {
    if (this.velAtual + delta <= this.velMax) {
      this.velAtual += delta
    } else {
      this.velAtual = this.velMax
    }
  },
  status() {
    return `${this.velAtual}Km/h de ${this.velMax}Km/`
  }
}

const ferrari = {
  modelo: 'F40',
  velMax: 324, //shadowing
}

const civic = {
  modelo: 'Civic si',
  status() {
    return `${this.modelo}: ${super.status()}`
  }
}

Object.setPrototypeOf(ferrari,carro)
Object.setPrototypeOf(civic, carro)

console.log(ferrari)
console.log(civic)

civic.acelerarMais(300)
console.log(civic.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())
