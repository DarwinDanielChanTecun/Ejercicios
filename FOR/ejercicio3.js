while (true){
    var numero = Math.floor(Math.random() * 10); 
    console.log(numero)
    if(numero === 0 ) {
        break;


        }
    }

    function esPar(numero) {
        return numero % 2 === 0; 

    }
    const numeros = [4, 5, 6, 7, 8, 9, 2, 2];

for (const numero of numeros) {
    if (esPar(numero)) {
        console.log(`${numero} es par`);
    } else {
        console.log(`${numero} es impar`);
    }
}
