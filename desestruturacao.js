const numbers = [1, 2, 3, 4, 5]

// Desestruturação e rest params
const [primeiro, segundo, terceiro, ...resto] = numbers
console.log(primeiro, segundo, terceiro, resto)

const pessoa = {
  nome: 'João',
  idade: 26,
  profissao: 'Programador'
}

// Desestruturação de objetos
const { nome, profissao, endereco } = pessoa
console.log(nome, profissao)