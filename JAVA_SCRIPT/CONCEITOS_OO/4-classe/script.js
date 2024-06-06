let cachorro = {
    patas: 4,
    raca: 'Felix',

    Latir: function(){
        console.log("auuuuu auuuu");
    }
}//fim cachorro

let labrador = Object.create(cachorro);
labrador.Latir();//fazendo o cão latir

labrador.raca = "estopa";//atribui valor pra raca de cao
console.log(labrador.raca);

let pastor = Object.create(cachorro);//criamos obj cao e
                                    //guardamos 
pastor.raca = "Pastor Alemão":


