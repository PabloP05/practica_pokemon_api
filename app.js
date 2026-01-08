let formulario = document.getElementById('formulario');
let nombre;

let foto = document.getElementById('fotoPokemon'); 
let nombrePokemon = document.getElementById('nombrePokemon');
let divPokemon = document.getElementById('mostrar');

let coleccion = document.getElementById('coleccion');

let botonAgregar = document.getElementById('botonAgregar');


formulario.addEventListener('submit',(event)=>{
    event.preventDefault();
    nombre = document.getElementById('nobrePokemon').value;
    
    nombre.toLowerCase();
   buscarPokemon(nombre);

     
});


botonAgregar.addEventListener('click',()=>{
    //console.log(foto.src);
    nombre = document.getElementById('nobrePokemon').value;
    cargarColeccion(nombre,foto.src);
});



async function buscarPokemon(pokemon){
    let datos = await fetch('https://pokeapi.co/api/v2/pokemon/'+pokemon);
    let datosParseados = await datos.json();
    console.log(datosParseados);
    foto.src = datosParseados.sprites.front_default
    nombrePokemon.innerText = pokemon
}

function cargarColeccion(nombrePokemon,imagen){
    let div = document.createElement('div');
    let nombreAgregado = document.createElement('h3');
    let imagenAgregado = document.createElement('img');

    nombreAgregado.innerText = nombrePokemon;
    imagenAgregado.src = imagen;
    div.appendChild(nombreAgregado);
    div.appendChild(imagenAgregado);

    coleccion.appendChild(div);

}