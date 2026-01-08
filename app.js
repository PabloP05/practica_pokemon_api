let formulario = document.getElementById('formulario');
let nombre;

let foto = document.getElementById('fotoPokemon'); 
let nombrePokemon = document.getElementById('nombrePokemon')
let divPokemon = document.getElementById('mostrar')

formulario.addEventListener('submit',(event)=>{
    event.preventDefault();
    nombre = document.getElementById('nobrePokemon').value;
    nombre.toLowerCase();
   buscarPokemon(nombre);
     
});


async function buscarPokemon(pokemon){
    let datos = await fetch('https://pokeapi.co/api/v2/pokemon/'+pokemon);
    let datosParseados = await datos.json();
    console.log(datosParseados);
    foto.src = datosParseados.sprites.front_default
    nombrePokemon.innerText = pokemon

    for (const element of datosParseados.abilities) {
        let p = document.createElement('p');
        p.innerText = element.ability;
        divPokemon.appendChild(p);
    }
}