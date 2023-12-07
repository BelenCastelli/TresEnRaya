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
let jugador = 1;
let J1 = 1
let J2 = 2
let simbolo;
let jugador1 = document.getElementById("jugador1")
let jugador2 = document.getElementById("jugador2")


function nombre1(){
    jugador1.textContent = prompt("Introduce aquí tu nombre" + this.simbolo)
    jugador1.style.color = "#0519f5"
    alert ("J1 = Tu empiezas, juegas con las X")
}

function nombre2(){
    jugador2.textContent = prompt("Introduce aquí tu nombre" + this.simbolo)
    jugador2.style.color = "#eb0c0c"
    alert ("J2= juegas con las O")
}

function mostrarSimbolo(celda) {

    let celdas = document.getElementById(celda)

    // Asignar simbolo a cada jugador
    jugador == 1 ? simbolo = "X" : simbolo = "O"
    celdas.textContent = simbolo

    // Alternar jugadores 
    jugador === 1 ? jugador = 2 : jugador = 1
   

    // Condiciones para ganar
    if ((celda1.textContent == "X" && celda2.textContent == "X" && celda3.textContent == "X") || (celda1.textContent == "X" && celda4.textContent == "X" && celda7.textContent == "X") ||
    (celda7.textContent == "X" && celda8.textContent == "X" && celda9.textContent == "X") || (celda3.textContent == "X" && celda6.textContent == "X" && celda9.textContent == "X") ||
    (celda1.textContent == "X" && celda5.textContent == "X" && celda9.textContent == "X") || (celda3.textContent == "X" && celda5.textContent == "X" && celda7.textContent == "X") ||
    (celda1.textContent == "O" && celda2.textContent == "O" && celda3.textContent == "O") || (celda1.textContent == "O" && celda4.textContent == "O" && celda7.textContent == "O") ||
    (celda7.textContent == "O" && celda8.textContent == "O" && celda9.textContent == "O") || (celda3.textContent == "O" && celda6.textContent == "O" && celda9.textContent == "O") ||
    (celda1.textContent == "O" && celda5.textContent == "O" && celda9.textContent == "O") || (celda3.textContent == "O" && celda5.textContent == "O" && celda7.textContent == "O")
    ) {
        alert ("Ha ganado " + (jugador === 1 ? jugador2.textContent : jugador1.textContent))
    } else if (celda1.textContent !== "" && celda2.textContent !== "" && celda3.textContent !== "" &&
    celda4.textContent !== "" && celda5.textContent !== "" && celda6.textContent !== "" &&
    celda7.textContent !== "" && celda8.textContent !== "" && celda9.textContent !== "")
    { 
    alert("Ha sido un empate");
    } else {
        alert("Turno del jugador " + (jugador === 1 ? jugador1.textContent : jugador2.textContent));
    }
}