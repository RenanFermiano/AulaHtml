//splice: remove/altera elementos adicionanado novos elem.
let  array = [1, 2, 3, 4, 5];
let index = array.indexOf(3); //retorna o indice desse elemento

if(index > -1){
    array.splice(index,1)//remove o elemento a partir do ind encontrado1
}

console.log(array)