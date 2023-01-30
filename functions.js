/* Codigo para hacer scroll a un div horizontal por medio de flechas.
Uso el tamaño de las cajas dentro del slide para restarselo al scrollLeft y llevarme
a la posicion deseada.
Además oculto las flechas dependiendo de en que posicion me encuentre*/

//obtengo los dos elementos de flecha
let gray_arrow_left = document.getElementById("left");
let gray_arrow_right = document.getElementById("right");

//el contenedor de los planes aka donde se hace scroll
var plans_container = document.getElementById("scroll");
//las tarjetas de planes porque necesito saber su tamaño, y este puede variar
var plans_card = document.getElementsByClassName("plans-container-card");
//averiguo el tamaño de las tarjetas, esta es la posicion central donde deberia emepezar
var size = plans_card[1].clientWidth;
console.log(plans_container)
console.log(size);

//Para que la cajita del centro se muestre por default
plans_container.scrollLeft = size * 2;

gray_arrow_left.addEventListener("click", function(){
    //gray_arrow_right.style.display = "inline-block";
    //Le resto el tamaño de las tarjetas  a la posicion del scroll para mover a la izquierda
    plans_container.scrollLeft -= size ;
    //Si se encuentra en la primera tarjeta deberia esconder la flecha izquierda,
    // pues porque ya no puede seguir llendo a la izquierda :P

    //if(plans_container.scrollLeft <= size*2){
    //    gray_arrow_left.style.display = "none";
    //}
});

gray_arrow_right.addEventListener("click", function(){
    //gray_arrow_left.style.display = "inline-block";
    plans_container.scrollLeft += size;

    //if(plans_container.scrollLeft >= size){
    //    gray_arrow_right.style.display = "none";
    //}
});

// SCROLL DE LAS TABLAS 
let arrow_left_table = document.getElementById("left-table");
let arrow_right_table = document.getElementById("right-table");

var plans_container_tables = document.getElementById("scroll-tables");

var plans_card_tables = document.getElementsByClassName("main__currency-table");

var size_table_container = plans_card_tables[0].clientWidth;


plans_container_tables.scrollLeft = size_table_container ;

arrow_left_table.addEventListener("click", function(){

    plans_container_tables.scrollLeft -= size_table_container  ;

});

arrow_right_table.addEventListener("click", function(){

    plans_container_tables.scrollLeft += size_table_container ;

});