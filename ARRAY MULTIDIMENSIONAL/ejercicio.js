
// for (let i = 0; i < 30; i++) {
//     let trampa = Math.floor(Math.random()*(5 - 2 + 1) + 2);
//     console.log(trampa)
// }
let trampas = []
for (let i = 0; i < 8; i++) {
    let fila = []
    for (let j = 0; j < 8; j++) {
        fila.push("  ");
    }
    trampas.push(fila)
    fila = []
}
trampas[4][5] = " #"

trampas[3][3] = " #"

trampas[5][7] = " #"

trampas[4][7] = " #"
//console.log(trampas)
let numero = 64;

let columnas = '------------------------------------------------ \n'
for (let i = 0; i < 8; i++) {
    let filas = ''
    let trampasFilas = ''
    for (let j = 0; j < 8; j++) {
        if (numero < 10) {
            filas += '|  ' +numero+ ' |'
        } else {
            filas += '| ' +numero+ ' |'
        }
        numero--;
        trampasFilas += '| ' +trampas[i][j]+ ' |'
    }
    columnas += filas + "\n"
    columnas += trampasFilas + "\n"
    columnas += '------------------------------------------------ \n'
}
console.log(columnas)