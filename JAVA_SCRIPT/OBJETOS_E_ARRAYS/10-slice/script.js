let  array = [1, 2, 3, 4, 5];
let index = array.indexOf(3);
//concat -> concatenacao (juntar)
novo_array = array.slice(0, index).concat(array.slice(index + 1));
console.log(novo_array)