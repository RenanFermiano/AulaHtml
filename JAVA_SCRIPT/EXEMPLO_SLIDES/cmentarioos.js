/*

% -> mod - resto da divisão
== -> igualdade(comp.)
= -> atribuição
!= -> diferente
'' ou "" -> string
=== -> comparação escrite
&& -> e (lógico)
|| -> ou (lógico)
+ -> concatenar (juntar)
//vazio (null): para deixar a variavel sem valor de maneira proposital
//indefinido (undefined): verificar se a variavel foi definida
float -> tipo flutuante (1.432)
+= -> somapares = somapares + i
i++ -> i= i + 1
*/

/*
var tipoDoFuncionario = "estagiario";
salarioMensal = 700;
if(tipoDoFuncionario =="estagiario" || tipoDoFuncionario == "clt"){

    if(salarioMensal > 0 && salarioMensal < 1000) {
        var salarioAnual = 13*salarioMensal + salarioMensal*0.05;
        console.log(salarioanual);

    }else{
        if(salarioMensal < 2000){
            var salarioAnual = 13*salarioMensal + salarioMensal*0.10;
            console.log(salarioAnual);
             }
        }
    }
*/

/*
var dia;
switch (new Date(). getDay()){
case 0:
    dia = "domingo"; break;
case 1:
    dia = "segunda"; break;
case 2:
    dia = "terça"; break;
case 3:
    dia = "quarta"; break;
case 4:
    dia = "quinta"; break;
case 5:
    dia = "sexta"; break;
case 6:
    dia = "sábado"; break;
}
console.log("hoje é " + dia)
*/

/*
const carro = ["Fiat","Volvo","BMW"];
for (var i=0;i<carro.length;i++){
    document.write(carro[i] + "<br>");
}
document.getElementById("demo").innerHTML = carro
*/

/*
var txt = "";
var pessoa = {fname:"John", name:"josé", idade:25}

for (var x in pessoa) {
    txt = txt + " " + pessoa [x];
}
*/

/*
var somapares = 0;
var i = 1;

while(true) {
    if (i % 2 != 0)
    continue;
somapares += i;
if (i == 10)
break;
i++;
}
*/