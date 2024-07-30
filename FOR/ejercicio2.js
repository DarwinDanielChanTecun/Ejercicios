//Numero posiivo o negativo
var numero = 5
console.log(true, false + numero)

//Numeros hasta que aparezca un 0

while (true){
    var numero = Math.floor(Math.random() * 25);
    console.log(numero)
    if(numero === 0) {
        break;
    }
}
    
