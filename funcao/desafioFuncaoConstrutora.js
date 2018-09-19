function pessoa(nome) {
  this.nome = nome
  this.falar = function () {
    console.log(`Meu nome é ${this.nome}`)
  }
}

const vic = new pessoa('victor')
vic.falar()