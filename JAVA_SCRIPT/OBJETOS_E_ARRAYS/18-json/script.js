//JSON

let pessoa = {
    "nome": "Juca",
    "idade": 28,
}
console.log(pessoa.nome);
console.log(pessoa.idade);

//usando json p/ string

let pessoatexto = JSON.stringify(pessoa);
console.log(pessoatexto);

//fazendo parse para retornar c dados do obj
let pessoaJSON = JSON.parse(pessoatexto);
console.log(pessoaJSON);

//*****************************************

//com string

let pessoa1 = {
    "nome": "Renan",
    "idade": 21,
    "profissao":  "cozinheiro",
    "hobbies": ["Video Game", "Academia", "Cozinhar"]  
}

let pessoatexto2 = JSON.stringify(pessoa1);
console.log(pessoatexto2);

let pessoaJSON2 = JSON.parse(pessoatexto2);
console.log(pessoaJSON2);

console.log(pessoaJSON2.hobbies[2]);
