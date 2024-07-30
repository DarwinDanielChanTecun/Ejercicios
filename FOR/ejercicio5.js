//Numeros hasta que aparezca un 0

while (true){
    var number = Math.floor(Math.random() * 15);
    console.log(number)
    if(number === 0) {
        let suma = 0;
        for (let number = 0; number < number.length; number++) {
            suma += number[number];
         
            console.log(suma);
        }
            break;
   
    } 
}
