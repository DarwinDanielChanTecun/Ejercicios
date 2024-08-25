function esPar (numero){
    return numero % 2 === 0;
}

const numeroIngresado = parseInt(prompt("Ingresa un numero"));

if(esPar(numeroIngresado)){
    alert("El numero es par");
}

else{
    alert("El numero es impar");
}