let celda1 = document.getElementById("celda1")
let celda2 = document.getElementById("celda2")
let celda3 = document.getElementById("celda3")
let celda4 = document.getElementById("celda4")
let celda5 = document.getElementById("celda5")
let celda6 = document.getElementById("celda6")
let celda7 = document.getElementById("celda7")
let celda8 = document.getElementById("celda8")
let celda9 = document.getElementById("celda9")

let celdas = [celda1, celda2, celda3, celda4, celda5, celda6, celda7, celda8, celda9]

let nombreJ1 = document.getElementById("nombreJ1")
let nombreJ2 = document.getElementById("nombreJ2")
let nombre1;
let nombre2;

let ganadasJ1 = document.getElementById("ganadasJ1")
let ganadasJ2 = document.getElementById("ganadasJ2")
let victoriasJ1 = 0
let victoriasJ2 = 0

let contador = document.getElementById("contador");
let partidas = 0;

// turnos
let jugador = 1

// celdas ocupadas para empate
let celdasOcupadas = 0;
class Jugador {
    constructor(simbolo){
        this.simbolo = simbolo
    }

    introducirNombre(simbolo){
        if (simbolo == "X"){
            nombre1 = prompt ("introduce aquí tu nombre") 
            nombreJ1.textContent = `${nombre1}: juegas con ${this.simbolo}`
            nombreJ1.style.color = "#0519f5"
        }

        if (simbolo == "O"){
            nombre2 = prompt ("introduce aquí tu nombre") 
            nombreJ2.textContent = `${nombre2}: juegas con ${this.simbolo}`
            nombreJ2.style.color = "#eb0c0c"
        }
    }
}

let jugador1 = new Jugador("X")
let jugador2 = new Jugador("O")

function mostrarSimbolo(celda){
    celda = document.getElementById(celda)

    // Alternar jugadores 
    if (jugador == 1){
         celda.textContent = jugador1.simbolo
        jugador = 2
    } else if (jugador == 2){
        celda.textContent = jugador2.simbolo;
        jugador = 1
    }
    celdasOcupadas++

    comprobarVictoria(celda);
}

function comprobarVictoria(){
    
    if ((celda1.textContent == jugador1.simbolo && celda2.textContent == jugador1.simbolo && celda3.textContent == jugador1.simbolo) || 
    (celda4.textContent == jugador1.simbolo && celda5.textContent == jugador1.simbolo && celda6.textContent == jugador1.simbolo) ||
    (celda1.textContent == jugador1.simbolo && celda4.textContent == jugador1.simbolo && celda7.textContent == jugador1.simbolo) ||
    (celda2.textContent == jugador1.simbolo && celda5.textContent == jugador1.simbolo && celda7.textContent == jugador1.simbolo) ||
    (celda7.textContent == jugador1.simbolo && celda8.textContent == jugador1.simbolo && celda9.textContent == jugador1.simbolo) || 
    (celda3.textContent == jugador1.simbolo && celda6.textContent == jugador1.simbolo && celda9.textContent == jugador1.simbolo) ||
    (celda1.textContent == jugador1.simbolo && celda5.textContent == jugador1.simbolo && celda9.textContent == jugador1.simbolo) || 
    (celda3.textContent == jugador1.simbolo && celda5.textContent == jugador1.simbolo && celda7.textContent == jugador1.simbolo)){
        alert(`¡Ha ganado ${nombre1}!`);
        celdasOcupadas = 0;
        reset()
        victoriasJ1++
        ganadasJ1.textContent = `Victorias ${nombre1} = ${victoriasJ1}`
        ganadasJ1.style.color = "#0519f5"
        partidas++
        contador.textContent = `Número de Partidas:${partidas} `
    }
    if ((celda1.textContent == jugador2.simbolo && celda2.textContent == jugador2.simbolo && celda3.textContent == jugador2.simbolo) || 
    (celda4.textContent == jugador2.simbolo && celda5.textContent == jugador2.simbolo && celda6.textContent == jugador2.simbolo) ||
    (celda1.textContent == jugador2.simbolo && celda4.textContent == jugador2.simbolo && celda7.textContent == jugador2.simbolo) ||
    (celda2.textContent == jugador2.simbolo && celda5.textContent == jugador2.simbolo && celda7.textContent == jugador2.simbolo) ||
    (celda1.textContent == jugador2.simbolo && celda4.textContent == jugador2.simbolo && celda7.textContent == jugador2.simbolo) ||
    (celda7.textContent == jugador2.simbolo && celda8.textContent == jugador2.simbolo && celda9.textContent == jugador2.simbolo) || 
    (celda3.textContent == jugador2.simbolo && celda6.textContent == jugador2.simbolo && celda9.textContent == jugador2.simbolo) ||
    (celda1.textContent == jugador2.simbolo && celda5.textContent == jugador2.simbolo && celda9.textContent == jugador2.simbolo) || 
    (celda3.textContent == jugador2.simbolo && celda5.textContent == jugador2.simbolo && celda7.textContent == jugador2.simbolo)){
        alert(`¡Ha ganado ${nombre2}!`);
        celdasOcupadas = 0;
        reset()
        victoriasJ2++
        ganadasJ2.textContent = `Victorias ${nombre2} = ${victoriasJ2}`
        ganadasJ2.style.color = "#eb0c0c"
        partidas++
        contador.textContent = `Número de Partidas: ${partidas}`
    } 

    if(celdasOcupadas == 9){
        alert("¡Ha sido un empate")
        celdasOcupadas = 0;
        reset()
        partidas++
        contador.textContent = `Número de Partidas: ${partidas}`
    }
}

function reset(){
    for(let i = 0; i < celdas.length; i++){
        celdas[i].textContent = ""
    }
}



function resetContador(){
    contador.textContent = `Número de Partidas: 0`
    partidas = 1

    nombreJ1.textContent = "Introduce Nombre J1"
    nombreJ1.style.color = "#000000"

    nombreJ2.textContent = "Introduce Nombre J2"
    nombreJ2.style.color = "#000000"

    ganadasJ1.textContent = `Victorias Jugador 1 = 0`
    ganadasJ1.style.color = "#000000"
    victoriasJ1 = 1

    ganadasJ2.textContent = `Victorias Jugador 2 = 0`
    ganadasJ2.style.color = "#000000"
    victoriasJ2 = 1
}
