function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

while (true) {
    const opcion = parseInt(prompt("Menu:\n1. Sumar\n2. Restar\n3. Salir"));

    if (opcion === 1) {
        const num1 = parseFloat(prompt("Ingresa el primer número:"));
        const num2 = parseFloat(prompt("Ingresa el segundo número:"));
        alert(`Resultado de la suma: ${sumar(num1, num2)}`);
    } else 
    if (opcion === 2) {
        const num1 = parseFloat(prompt("Ingresa el primer número:"));
        const num2 = parseFloat(prompt("Ingresa el segundo número:"));
        alert(`Resultado de la resta: ${restar(num1, num2)}`);
    } else
     if (opcion === 3) {
        alert("Adios");
        break;
    } else {
        alert("Opción incorrecta");
    }
}
