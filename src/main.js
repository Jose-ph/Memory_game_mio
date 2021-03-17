
const tablero = document.querySelector("#tablero");

const cartas = document.querySelectorAll(".carta");

let colores = ["rojo","amarillo","verde","azul","violeta","gris"];

let coloresDuplicados = colores.concat(colores);

asignarColorCartas(cartas,coloresDuplicados);


function asignarColorCartas(cartas,colores){

    for(let i = 0; i < cartas.length ; i++){

        cartas[i].classList.add(colores[i]);







    }



}