let carro = {
    portas: 5,
    portamalas: '250L',
    motor:'2.0',
}//fim obj

console.log(carro);

let adicionais = {
    tetosolar: true,
    arcondicionado: true,
}
//adicionando novas caracteristicas ao obj carro
Object.assign(carro, adicionais);
console.log(carro);