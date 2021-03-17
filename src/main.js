
const tablero = document.querySelector("#tablero");

const cartas = document.querySelectorAll(".carta");

let colores = ["rojo","amarillo","verde","azul","violeta","gris"];

let coloresDuplicados = colores.concat(colores);


ocultarFrenteCartas(cartas);
asignarColorRandomCartas(cartas,coloresDuplicados);
obtenerCartaUsuario();
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

function mostrarCarta (){

   
    for( let i = 0 ; i < cartas.length ; i++){

        cartas[i].addEventListener('click', (e)=>{

            let cartaElegida = e.target;

            let cartaDeEspaldas = cartaElegida.classList.contains("dorso");
            let cartaDeFrente = !cartaElegida.classList.contains("dorso");

            if (cartaDeEspaldas){

                cartaElegida.classList.remove("dorso");
            }

            else if (cartaDeFrente){

                cartaElegida.classList.add("dorso");
            }
            
    
        });

    }

}

function obtenerCartaUsuario (){

    tablero.onclick = function(e) {

        const $cartaElegida = e.target;
       
        


    }
    
    return console.log($cartaElegida);
}