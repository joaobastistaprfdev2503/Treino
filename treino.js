const pessoas = [
  { nome: "Ana", idade: 25, cidade: "São Paulo", ativo: true },
  { nome: "Bruno", idade: 32, cidade: "Rio de Janeiro", ativo: false },
  { nome: "Carla", idade: 19, cidade: "Belo Horizonte", ativo: true },
  { nome: "Daniel", idade: 45, cidade: "Curitiba", ativo: true },
  { nome: "Eduarda", idade: 28, cidade: "Porto Alegre", ativo: false },
  { nome: "Felipe", idade: 36, cidade: "São Paulo", ativo: true },
  { nome: "Gabriela", idade: 22, cidade: "Recife", ativo: true },
  { nome: "Henrique", idade: 41, cidade: "Fortaleza", ativo: false },
  { nome: "Isabela", idade: 30, cidade: "Salvador", ativo: true },
  { nome: "João", idade: 27, cidade: "Campinas", ativo: true },
  { nome: "Karina", idade: 34, cidade: "São Paulo", ativo: false },
  { nome: "Lucas", idade: 18, cidade: "Manaus", ativo: true },
  { nome: "Mariana", idade: 29, cidade: "Florianópolis", ativo: true },
  { nome: "Nathan", idade: 38, cidade: "Goiânia", ativo: false },
  { nome: "Olivia", idade: 24, cidade: "Vitória", ativo: true },
  { nome: "Paulo", idade: 50, cidade: "São Luís", ativo: false },
  { nome: "Quésia", idade: 33, cidade: "Natal", ativo: true },
  { nome: "Rafael", idade: 21, cidade: "João Pessoa", ativo: true },
  { nome: "Sabrina", idade: 40, cidade: "Sorocaba", ativo: false },
  { nome: "Thiago", idade: 26, cidade: "São Paulo", ativo: true },
  { nome: "Ursula", idade: 35, cidade: "Aracaju", ativo: true },
  { nome: "Victor", idade: 31, cidade: "Maringá", ativo: false },
  { nome: "Wesley", idade: 23, cidade: "Ribeirão Preto", ativo: true },
  { nome: "Xavier", idade: 44, cidade: "Santos", ativo: false },
  { nome: "Yasmin", idade: 20, cidade: "Osasco", ativo: true },
  { nome: "Zeca", idade: 55, cidade: "São Paulo", ativo: false }
];

/*

//Filtrar apenas as pessoas ativas

const ativos = pessoas.filter(pessoa => pessoa.ativo === true)
//console.log(ativos)


// Pegar apenas os nomes

const nomesPessoas = pessoas.map(pessoa => pessoa.nome)
//console.log(nomesPessoas)

//Somar todas as idades
const somaIdades = pessoas.reduce((acumulador, pessoa ) => {
  const somatorio = acumulador + pessoa.idade
  return somatorio
}, 0)

//console.log(somaIdades)

//Achar a primeira pessoa de Santos

const procurar = pessoas.find(pessoa => pessoa.cidade === "Santos")
console.log(procurar) */

//                  Agora mesmos objetivos mas apenas para pesssoas ativas


const pessoasAtivas = pessoas.filter(pessoa => pessoa.ativo === true)

const pessoasNomes = pessoasAtivas.map(pessoa => pessoa.nome)
const somaIdade = pessoasAtivas.reduce((acumulador, pessoa) => {
 return (acumulador + (pessoa.idade))}, 0)
const pessoaCidade = pessoasAtivas.find(pessoa => pessoa.cidade === "São Paulo") 

console.log(pessoasAtivas)
