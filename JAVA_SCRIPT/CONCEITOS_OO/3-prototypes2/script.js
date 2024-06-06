//vamos criar um obj pessoa
const pessoa = {
    maos: 2,
    olhos:2,
}//fim pessoa

const novapessoa = Object.create(pessoa);
//console.log(novapessoa.maos);
//console.log(novapessoa.olhos);

console.log(novapessoa.hasOwnProperty('maos'));
console.log(Object.getPrototypeOf(novapessoa)=== pessoa);