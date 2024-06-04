let  array = [1, 2, 3, 4, 5];
let novo_array = array.reduce((acc, Element) =>{
    if(Element !== 3){
        acc.push(Element);
    }
    return acc
}, []);

//constroi novo vetor excluindo elem desejado
console.log(novo_array);