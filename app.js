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
   //buscarPokemon(nombre); //version asincr
    buscarPokemon_Con_then_catch(nombre);
    //buscarPokemon_jQuery(nombre);
     
});


botonAgregar.addEventListener('click',()=>{
    //console.log(foto.src);
    nombre = document.getElementById('nobrePokemon').value;
    cargarColeccion(nombre,foto.src);
});

//FUNCIONES DE BUSQUEDA PARA LOS POKEMONS (ASINCRONA, PROMESAS Y JQUERY)

async function buscarPokemon(pokemon){
    let datos = await fetch('https://pokeapi.co/api/v2/pokemon/'+pokemon);
    let datosParseados = await datos.json();
    console.log(datosParseados);
    foto.src = datosParseados.sprites.front_default
    nombrePokemon.innerText = pokemon
}


function buscarPokemon_Con_then_catch(pokemon){
    fetch('https://pokeapi.co/api/v2/pokemon/'+pokemon)
    .then(respuesta => respuesta.json())
    .then(datos => {
        foto.src = datos.sprites.front_default
        nombrePokemon.innerText = pokemon}
    );
}

function buscarPokemon_jQuery(pokemon){
console.log('hola')
    $.getJSON('https://pokeapi.co/api/v2/pokemon/' + pokemon,
        (datos)=>{  // la funcion despues de la coma es la que se ejecuta cuando recibe el JSON 
            foto.src = datos.sprites.front_default
            nombrePokemon.innerText = pokemon
        })
        .fail(()=>{//si falla se llama con fail
            console.log("Error al buscar el Pokémon")
        });
}


//let a =  await fetch('https://pokeapi.co/api/v2/pokemon/'+pokemon);



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