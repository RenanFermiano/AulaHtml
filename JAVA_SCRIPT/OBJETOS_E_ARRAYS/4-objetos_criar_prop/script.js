let pessoa = {
    //atributos
    nome: "Renan",
    idade: 21,
    profissao: "Pizzaria"
    
}//fim obj

console.log(pessoa.nome);
delete pessoa.nome;
console.log(pessoa.nome);//undefined

pessoa.casado = false;
console.log(pessoa.casado);