
const tablero = document.querySelector("#tablero");

const cartas = document.querySelectorAll(".carta");

let colores = ["rojo","amarillo","verde","azul","violeta","gris"];

let coloresDuplicados = colores.concat(colores);

let cartaElegidaUsuario =[];




ocultarFrenteCartas(cartas);

asignarColorRandomCartas(cartas,coloresDuplicados);

obtenerCartaUsuario();

if (cartaElegidaUsuario.length === 2){

    console.log("No podés elegir más cartas.");
}
    




//obtenerCartaUsuario();
//mostrarCarta();




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

    
    
    //let cartaDeFrente = !cartaElegida.classList.contains("dorso");


    for( let i = 0 ; i< carta.length ; i++){

        let cartaDeEspaldas = cartaElegida[i].classList.contains("dorso");

        if (cartaDeEspaldas){

            cartaElegida[i].classList.remove("dorso");
        }

    }

            

            
          // Esto usarlo al momento de comparar
           // else if (cartaDeFrente){

               // cartaElegida.classList.add("dorso");
            //}
            
    
        

    

}

function obtenerCartaUsuario (){

    let cartaElegida;

    tablero.onclick = function(e) {

         cartaElegida = e.target;

        console.log(cartaElegida);

        cartaElegidaUsuario.push(cartaElegida);

         mostrarCarta(cartaElegidaUsuario); 
         

    }

    
    
}