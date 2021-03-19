function asignarIdCartas(cartas){

    for(let i = 0 ; i < cartas.length ; i++){

        cartas[i].id = "carta" + i;
    }
}

function asignarColorRandomCartas(cartas,colores){

    let coloresRandom = colores.sort( () => .5 - Math.random() );

    for(let i = 0; i < cartas.length ; i++){

        cartas[i].classList.add(coloresRandom[i]);

    }

}

function ocultarFrenteCartas (cartas){

    for( let i = 0 ; i < cartas.length ; i++){

        cartas[i].classList.add("dorso");
    }


}

function mostrarCarta (carta){

    let cartaElegida = carta

    for( let i = 0 ; i< carta.length ; i++){

        let cartaDeEspaldas = cartaElegida[i].classList.contains("dorso");

        if (cartaDeEspaldas){

            cartaElegida[i].classList.remove("dorso");
        }

    }  

}

function obtenerCartaUsuario (){

    let cartaElegida;
    
    tablero.onclick = function(e) {
        

         cartaElegida = e.target;

        console.log(cartaElegida);

        cartaElegidaUsuario.push(cartaElegida);

         mostrarCarta(cartaElegidaUsuario); 


            if (cartaElegidaUsuario.length === 2  ){

                console.log("No podés elegir más cartas.");
            
            
                   tablero.onclick = function(){
            
                    console.log("input bloqueado");
    
                  }
    
                  setTimeout(() => {
    
                    console.log("comparando cartas");

                    compararCartas(cartaElegidaUsuario);

                    cartaElegidaUsuario = [];

                    if (cartaElegidaUsuario.length === 0){

                        desbloquarInput();
                        

                    }

                       
                       
                
                   cartaElegidaUsuario = [];
                    
               }, 1000);

                }

       }

    
       
    
    }


    function desbloquarInput(){

       obtenerCartaUsuario();
       
    }

   
    function compararCartas(jugada){

        //esto lo uso con las cartas
       /*Entonces al poner por ejemplo
       cartas[0].classList esto me devuelve algo que se llama
       DOMTokenList y como es parecido a un array hice esto 
       aunque hay que acordarse muchas cosas */
        let mismoColor = jugada[0].classList[6] === jugada[1].classList[6];

        let noEsMismaCarta = jugada[0].id != jugada[1].id;
       
        if ( mismoColor && noEsMismaCarta){

            jugada[0].classList.add("iguales");
            jugada[1].classList.add("iguales");
            console.log("son iguales !")
            
        }

        else {ocultarFrenteCartas(jugada);

            console.log("Son diferentes !");

        }

    }


const tablero = document.querySelector("#tablero");

const cartas = document.querySelectorAll(".carta");

let colores = ["rojo","amarillo","verde","azul","violeta","gris"];

let coloresDuplicados = colores.concat(colores);

let cartaElegidaUsuario =[];

let comparando = false;

let mensajeEstadoJuego = document.querySelector("#estado");



function manejarJuego(){

    asignarIdCartas(cartas);

    ocultarFrenteCartas(cartas);

    asignarColorRandomCartas(cartas,coloresDuplicados);

    obtenerCartaUsuario();
  

}
 mensajeEstadoJuego.innerHTML = "<h3>Inicia el Juego con START</h3>";
 manejarJuego();
