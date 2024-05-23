function saudacao(nome, idade){
    if(idade === undefined){
        console.log("Óla" + nome);
    }else{
        console.log("Óla" + nome + 
        "você tem" + idade + "anos");
    }
}

saudacao("Matheus");
saudacao("Juca", 28);