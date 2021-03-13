const tablero = document.querySelector('#tablero');
const estadoJuego = document.querySelector('#estado');
const numeroJugadas = document.querySelector("#jugadas");

estadoJuego.textContent = "Preparando el juego...";

let cartas  = document.querySelectorAll(".cartas");

let colores = ["rojo","azul","amarillo","verde","negro","celeste"];

let coloresDuplicados = colores.concat(colores);


function prepararTablero (){


    asignarColorRandom(coloresDuplicados);
}

function asignarColorRandom (colores) {

  
    coloresRandom = colores.sort( () => .5 - Math.random() );

   for(let i = 0 ; i < cartas.length ; i++){

       cartas[i].classList.add(coloresRandom[i]);
   }
  

}

prepararTablero();

