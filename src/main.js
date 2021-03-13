const tablero = document.querySelector('#tablero');
const estadoJuego = document.querySelector('#estado');
const numeroJugadas = document.querySelector("#jugadas");

estadoJuego.textContent = "Preparando el juego...";

let cartas  = document.querySelectorAll(".cartas");

let colores = ["rojo","azul","amarillo","verde","negro","celeste"];

let coloresDuplicados = colores.concat(colores);


function prepararTablero (){

    ocultarFrente();
    asignarColorRandom(coloresDuplicados);
    mostrarFrente();
    
}

function asignarColorRandom (colores) {

  
    coloresRandom = colores.sort( () => .5 - Math.random() );

   for(let i = 0 ; i < cartas.length ; i++){

       cartas[i].classList.add(coloresRandom[i]);
   }
  

}

function ocultarFrente(){

    cartas.forEach(carta => {
        carta.classList.add("dorso");
        
    });
}

function mostrarFrente(){
//Esto usarlo para mostrar y ocultar las cartas al comparar.
    cartas.forEach(carta => {

        carta.addEventListener('click',()=>{

            if (carta.classList.contains("dorso")) {
                carta.classList.remove("dorso");
            
            }

            else if (!carta.classList.contains("dorso")){

                carta.classList.add("dorso");
            }

        });
        
    });
}

prepararTablero();

