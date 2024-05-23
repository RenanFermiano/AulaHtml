function recursao(n){
    if(n - 1 < 2){
        console.log("Recursao parou")
    }else if(n % 2 != 0){
        console.log("numero é impar" + n);
        recursao(n - 1);
    }else{
        console.log("numero é par" + n);
        recursao(n - 2);
    }
}

recursao(5);