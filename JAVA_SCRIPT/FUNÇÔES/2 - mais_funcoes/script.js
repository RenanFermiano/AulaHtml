function podeDirigir(idade, cnh){
if(idade >= 18 && cnh == true){
    console.log("pode dirigir");
    }
else{
    console.log("não pode dirigir");
}

}//fim funcao

console.log(podeDirigir(10,false));
console.log(podeDirigir(25,false));
console.log(podeDirigir(18,true));
