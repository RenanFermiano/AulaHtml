const cachorro = {
    raca: 'caramelo',
    uivar: function(){
        console.log("Auuuuuuuuu");
    },
    rosnar: function(){
        console.log("grrrrrrrr");
    },

    setRaca: function(escrever_raca){
        this.raca = escrever_raca;
    },

    getRaca: function(){
        return "A raça é" + this.raca;
    }

}//fim obj
console.log(cachorro.raca);
console.setRaca('carameloooo');
console.log(cachorro.raca);
console.log(cacorro.getRaca());

//*******************************************

const cachorro2 = {
    raca2: 'Labrador',
    Andar: function(){
        console.log("Andando");
    },
    Rolar: function(){
        console.log("Rolando");
    },

    setRaca: function(raca){
        this.raca2 = escrever_raca2;
    },

    getRaca: function(){
        return "A raça é" + this.raca2;
    }

}//fim obj
console.log(cachorro.raca2);
console.setRaca('Labrador');
console.log(cachorro.raca2);
console.log(cacorro.getRaca());