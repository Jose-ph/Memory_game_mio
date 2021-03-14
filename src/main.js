const tablero = document.querySelector('#tablero');
const estadoJuego = document.querySelector('#estado');
const numeroJugadas = document.querySelector("#jugadas");

estadoJuego.textContent = "Preparando el juego...";

let cartas  = document.querySelectorAll(".cartas");

let colores = ["rojo","azul","amarillo","verde","negro","celeste"];

let coloresDuplicados = colores.concat(colores);

let primeraCartaUsuario = null;
let segundaCartaUsuario = null;
let turnoJugador = true;

const jugadaUsuario = [];


function prepararTablero (){

    ocultarFrente();
    asignarColorRandom(coloresDuplicados);
   manejarCartas(turnoJugador)

   manejarJugadaUsuario();

  
   

   //manejarCartas(turnoJugador);

    
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

function manejarCartas(turnoJugador){
//Esto usarlo para mostrar y ocultar las cartas al comparar.

    if (turnoJugador === true){

        for( let i = 0 ; i < cartas.length; i++){

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


         else if(jugadaUsuario === false){

            for(let i = 0 ; i< cartas.length; i ++){

                cartas[i].removeEventListener('click',()=>{

                    if (cartas[i].classList.contains("dorso")) {
                        cartas[i].classList.remove("dorso");
                    
                    }
        
                    else if (!cartas[i].classList.contains("dorso")){
        
                        cartas[i].classList.add("dorso");
                   }

                    
                    
                });
            }
         }


        //for( let i = 0 ; i < cartas.length; i++){

           // cartas[i].addEventListener('click',() =>{

                //if (cartas[i].classList.contains("dorso")) {
                   //  cartas[i].classList.remove("dorso");
                 
                // }
     
                // else if (!cartas[i].classList.contains("dorso")){
     
                    // cartas[i].classList.add("dorso");
               // }


            //}
            
            
            
           // );
       // }

    }

    
   


function manejarJugadaUsuario (){

    



    for(let i = 0; i< cartas.length; i++){

        cartas[i].addEventListener('click',(event) =>{

            
            

                if(primeraCartaUsuario && jugadaUsuario.length !=2){

                    primeraCartaUsuario = event.target;
        
                   jugadaUsuario.push(primeraCartaUsuario);

                }

                else if (!primeraCartaUsuario && jugadaUsuario.length != 2){
        
                     segundaCartaUsuario = event.target;
         
                     
                    jugadaUsuario.push(segundaCartaUsuario);
                }
            


            console.log(jugadaUsuario[0],jugadaUsuario[1],jugadaUsuario[2]);

            
            
            turnoJugador = false;

               
            manejarCartas(turnoJugador);

        } );

        
        
        
    }
    

    

   // cartas.forEach(carta => {

       // carta.addEventListener('click', (event) => {

            

            //if(turnoJugador === true){

               // if(primeraCartaUsuario && jugadaUsuario.length != 2){
    
                    //primeraCartaUsuario = event.target;
        
                   // jugadaUsuario.push(primeraCartaUsuario);
             //   }
        
              //  else if (!primeraCartaUsuario && jugadaUsuario.length != 2){
        
                   //  segundaCartaUsuario = event.target;
        
                    
                   // jugadaUsuario.push(segundaCartaUsuario);
             //   }
        
               
              //  console.log(jugadaUsuario[0],jugadaUsuario[1],jugadaUsuario[2]);

                //turnoJugador = false;

               // setTimeout(() => {

                  //  manejarCartas(turnoJugador,jugadaUsuario);
                    
               // }, 1000);
                
               
                
              //  comprobarMismaCarta();

          //  }
         
            
         // });
        
   // });

    

        
        
    

          
         


      
      


}

function comprobarMismaCarta (){


    if ( jugadaUsuario[0] === jugadaUsuario[1]){

        jugadaUsuario.pop();

        console.log("Seleccionaste dos veces la misma carta");
    }






}

function bloquearInputUsuario (){

    for(let i = 0; i< cartas.length; i++){


        cartas[i].addEventListener('click',()=>{

            console.log
        })
    }
}

prepararTablero();

