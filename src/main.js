const tablero = document.querySelector('#tablero');
const estadoJuego = document.querySelector('#estado');
const numeroJugadas = document.querySelector("#jugadas");

estadoJuego.textContent = "Preparando el juego...";

let cartas  = document.querySelectorAll(".cartas");

let colores = ["rojo","azul","amarillo","verde","negro","celeste"];

let coloresDuplicados = colores.concat(colores);

let primeraCartaUsuario = null;
let segundaCartaUsuario = null;
let turnoJugador;

const jugadaUsuario = [];


function prepararTablero (){

    ocultarFrente();
    asignarColorRandom(coloresDuplicados);
    //manejarCartas();
    manejarJugadaUsuario();
   // manejarCartas();
    
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

function manejarCartas(turnoJugador, jugadaUsuario){
//Esto usarlo para mostrar y ocultar las cartas al comparar.

    if (turnoJugador === true && jugadaUsuario.length != 2){

       // cartas.forEach(carta => {

            //carta.addEventListener('click',()=>{
     
                 //if (carta.classList.contains("dorso")) {
                   //  carta.classList.remove("dorso");
                 
                 //}
     
                 //else if (!carta.classList.contains("dorso")){
     
                    // carta.classList.add("dorso");
                //}
     
             //});
             
     
     
             
        // });

        for( let i = 0 ; i< cartas.length; i++){

            cartas[i].addEventListener('click',() =>{

                if (cartas[i].classList.contains("dorso")) {
                     cartas[i].classList.remove("dorso");
                 
                 }
     
                 else if (!cartas[i].classList.contains("dorso")){
     
                     cartas[i].classList.add("dorso");
                }


            }
            
            
            
            );
        }

    }

    else console.log("Input Bloqueado");
   
}

function manejarJugadaUsuario (){

    turnoJugador = true;
   // manejarCartas();

    

    cartas.forEach(carta => {

        carta.addEventListener('click', (event) => {

            //

            if(turnoJugador === true){

                if(primeraCartaUsuario && jugadaUsuario.length != 2){
    
                    primeraCartaUsuario = event.target;
        
                    jugadaUsuario.push(primeraCartaUsuario);
                }
        
                else if (!primeraCartaUsuario && jugadaUsuario.length != 2){
        
                     segundaCartaUsuario = event.target;
        
                    
                    jugadaUsuario.push(segundaCartaUsuario);
                }
        
               
                console.log(jugadaUsuario[0],jugadaUsuario[1],jugadaUsuario[2]);
                
                
              //  comprobarMismaCarta();

            }
         
            
          });
        
    });

    

        
        
    

          
         


      
      


}

function comprobarMismaCarta (){


    if ( jugadaUsuario[0] === jugadaUsuario[1]){

        jugadaUsuario.pop();

        console.log("Seleccionaste dos veces la misma carta");
    }






}

prepararTablero();

