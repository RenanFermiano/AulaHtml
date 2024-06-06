function criarcachorro(raca, patas, cor){//metodo construtor
    let cachorro = Object.create({});
    cachorro.raca = raca;
    cachorro.patas = patas;
    cachorro.cor = cor;
    cachorro.latir = function(){
        console.log("Au au...");
    }
}//fim instancia cachorro

let doberman = criarcachorro