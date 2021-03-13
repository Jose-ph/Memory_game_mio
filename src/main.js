const tablero = document.querySelector('#tablero');
const estadoJuego = document.querySelector('#estado');
const numeroJugadas = document.querySelector("#jugadas");

estadoJuego.textContent = "Preparando el juego...";

let cartas  = document.querySelectorAll(".cartas");

let colores = ["rojo","azul","amarillo","verde","negro","celeste"];

let coloresDuplicados = colores.concat(colores);

let primeraCartaUsuario = null;
let segundaCartaUsuario = null;

const jugadaUsuario = [];


function prepararTablero (){

    ocultarFrente();
    asignarColorRandom(coloresDuplicados);
    manejarCartas();
    manejarJugadaUsuario();
    
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

function manejarCartas(){
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

function manejarJugadaUsuario (){

        window.addEventListener('click', (event) => {

           
         
            if(primeraCartaUsuario && jugadaUsuario.length != 2){
    
                primeraCartaUsuario = event.target;
    
                jugadaUsuario.push(primeraCartaUsuario);
            }
    
            else if (!primeraCartaUsuario && jugadaUsuario.length != 2){
    
                 segundaCartaUsuario = event.target;
    
                
                jugadaUsuario.push(segundaCartaUsuario);
            }
    
           
    
            
            console.log(jugadaUsuario[0],jugadaUsuario[1],jugadaUsuario[2]);
            
          });
        
    

   


      
      


}

function bloquerInputUsuario(){

    window.addEventListener('click', (event) => {
         
        console.log("No puedes elegir mas de 2 cartas por turno");
        
      });
    


}

prepararTablero();

