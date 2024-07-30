let numeroObjetivo = Math.floor(Math.random() * 100) + 1; 
console.log("Adivina el número entre 1 y 100.");

function adivinarNumero(numeroUsuario) {
    if (numeroUsuario < numeroObjetivo) {
        return "mayor";
    } else if (numeroUsuario > numeroObjetivo) {
        return "menor";
    } else {
        return "N"; // Respuesta de la adivinanza
    }
}

// etiquetas
let numeroUsuario;
do {
    numeroUsuario = prompt("Introduce tu adivinanza:");
    console.log(adivinarNumero(Number(numeroUsuario)));
} while (adivinarNumero(Number(numeroUsuario)) !== "N");

console.log("¡Felicidades! Adivinaste la letra correcto.");