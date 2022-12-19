let pokemons = [
    {id: 1, name: "charmander", type: "fire", base_damage: 10, base_hp: 12, speed: 30},
    {id: 2, name: "squirtle", type: "water", base_damage: 9, base_hp: 14, speed: 26},
    {id: 3, name: "bulbasaur", type: "leaf", base_damage: 8, base_hp: 16, speed: 26},
    {id: 4, name: "pikachu", type: "electric", base_damage: 12, base_hp: 8, speed: 32},
    {id: 5, name: "pidgey", type: "air", base_damage: 10, base_hp: 10, speed: 35},
    {id: 6, name: "goldeen", type: "water", base_damage: 9, base_hp: 12, speed: 32},
    {id: 7, name: "bellsprout", type: "leaf", base_damage: 10, base_hp: 12, speed: 30},
    {id: 8, name: "magnemite", type: "electric", base_damage: 9, base_hp: 14, speed: 30},
    {id: 9, name: "ponyta", type: "fire", base_damage: 12, base_hp: 18, speed: 36},
    {id: 10, name: "evee", type: "normal", base_damage: 10, base_hp: 12, speed: 30},
]
 



//  1.  Ordernar los pokemons por base_damage de menor a mayor.

console.log('Resolución Problema 1')

function sortByDamage() {
    return pokemons.sort((a,b) => {return a.base_damage - b.base_damage})
}

console.log(sortByDamage());




//  2.  Crear una funcion para ordernar los pokemons dependiendo de el ('argumento') que se ingrese en la funcion.
//      Pueden ingresar: type, base_damage, base_hp o speed.

console.log('Resolución ejercicio 2')

// typeof : indica el tipo de operando (function, string, number, object, undefined)

function sortByArgument(property){
    if (typeof pokemons[0][property] === "string"){ // Si es un string
        console.log('is an string')
        return pokemons.sort((a,b) => {return a[property].localeCompare(b[property])})

    } else if (typeof pokemons[0][property] === "number"){ // Si es un número
        console.log('is a number');
        return pokemons.sort((a,b) => {return a[property] - b[property]})
        
    } else {
        return "Por favor utiliza un atributo válido"
    }
}

console.log(sortByArgument('base_hp')); // No olvidar colocar la property entre comillas ('property')




//  3.  Crear una funcion que filtre el objeto pokemons y devuelva un arreglo con los pokemons filtrados.
//      La funcion debe aceptar un argumento para filtrar por type de pokemon.

console.log('Resolución ejercicio 3')

function sortByType(property) {
    return pokemons.sort((a,b) => {return a[property].localeCompare(b[property])})
}

console.log(sortByType('type'));




//  4.  Crear un objeto llamado Pokemon Master que tenga los siguientes atributos: 
//      id: number,
//      name: string,
//      created_date: string,
//      pokemon: array of objects,

// pokemons.Pokemon_Master = {
//     id: 00001,
//     name: 'Ash',
//     created_date: '5th',
//     pokemon: [
//         {name: 'Pikachu'},
//         {name: 'Bulbasaur'}
//     ],
// }

// console.log(pokemons)

console.log('Resolución ejercicio 4 y 5')

let PokemonMaster = {
    id: 1,
    name: "Ash Ketchum",
    created_date: new Date(),
    pokemon: [],

//  5.  Crear una funcion que de manera aleatoria agregue un nuevo pokemon al atributo pokemon de Pokemon Master.
    
    addRandomPokemon: function() {
      // Obtener un índice aleatorio del array de pokemons
      let randomIndex = Math.floor(Math.random() * pokemons.length);
      // Obtener el pokemon en ese índice
      let newPokemon = pokemons[randomIndex];
      // Agregar el pokemon al atributo pokemon de PokemonMaster
      this.pokemon.push(newPokemon);
    }
};

//   PokemonMaster.addRandomPokemon();

//   console.log(PokemonMaster)



 
//  6.  Crear una funcion que agregue de manera aleatoria los atributos min_damage y max_damage a nuestro arreglo de pokemons teniendo en cuenta lo siguiente:
// min_damage debe ser un numero entero aleatorio entre 1 y 2 y max_damage debe ser un numero entero aleatorio entre 3 y 5
 
console.log('Resolución ejercicio 6')

function addRandomDamageToPokemons() {
    pokemons.forEach(pokemon => {
      pokemon.min_damage = Math.floor(Math.random() * 2) + 1;
      pokemon.max_damage = Math.floor(Math.random() * 3) + 3;
    });
}

addRandomDamageToPokemons();

console.log(pokemons)




//  7.  Crear una funcion que determine el daño que hara un pokemon elegido de la lista ante una posible pelea, para ello considerar que el daño que hara el pokemon es:
// daño = base_damage + un valor aleatorio entre el min_damage y el max_damage
 
function calculatePokemonDamage(pokemon) {
    let randomDamage = Math.floor(Math.random() * (pokemon.max_damage - pokemon.min_damage + 1)) + pokemon.min_damage;
    return pokemon.base_damage + randomDamage;
}

let chosenPokemon = pokemons[0];
let damage = calculatePokemonDamage(chosenPokemon);
console.log(`El daño del pokemon es: ${damage}`);



//  8.  Nuestro Pokemon Master quiere estar preparado para pelear, para ello necesita que lo apoyes a ordenar sus pokemons. Colocar tres pokemons con la funcion del ejercicio 5.
// El quiere que sus pokemons se ordenen de manera que el que tenga un mayor valor posible de base_damage + max_damage sea el que este primero en la lista y asi sucesivamente.
 
console.log('Resolución ejercicio 8')

function addThreePokemonsToMaster() {
    // Agregar tres pokemons a PokemonMaster
    PokemonMaster.addRandomPokemon();
    PokemonMaster.addRandomPokemon();
    PokemonMaster.addRandomPokemon();
  
    // Ordenar el atributo pokemon de PokemonMaster según el valor posible de base_damage + max_damage
    PokemonMaster.pokemon.sort((pokemon1, pokemon2) => {
      const damage1 = pokemon1.base_damage + pokemon1.max_damage;
      const damage2 = pokemon2.base_damage + pokemon2.max_damage;
      if (damage1 > damage2) return -1;
      if (damage1 < damage2) return 1;
      return 0;
    });
}

addThreePokemonsToMaster();

console.log(PokemonMaster)

//  9.  Crear una lista desordenada de Pokemons en nuestro documento HTML

console.log('Resolución ejercicio 9')

const root_1 = document.getElementById('root_1');
const ul = document.createElement('ul');

root_1.append(ul)

for (const pokemon in pokemons) {
    const li = document.createElement('li');

    li.textContent = pokemons[pokemon].name
    ul.append(li)
}
 
//  10. Utilizando javascript crear una tabla de pokemons con las siguientes columnas: id, name, type, base_damage, base_hp, speed

const root_2 = document.getElementById('root_2');
const table = document.createElement('table');

const thead = document.createElement('thead');
const trHead = document.createElement('tr'); // Un sola row

root_2.append(table)
table.append(thead)
thead.append(trHead);

for (const key in pokemons[0]) { // Para el thead
    const th = document.createElement('th'); // Un th por cada atributo

    th.textContent = key.toUpperCase()
    th.style.cursor = 'pointer'
    trHead.append(th)
}

const tbody = document.createElement('tbody');

table.append(tbody)

for (const index in pokemons) { // Para el body
    const trBody = document.createElement('tr'); // 9 row, una por cada pokemon

    tbody.append(trBody)

    for (const key in pokemons[index]) {
        const td = document.createElement('td');
        td.textContent = pokemons[index][key] // Llama al value de key

        trBody.append(td)
    }
}


 
//  11. Utilizando javascript modifica el codigo creado en el ejecicio anterior y agrega un evento que permita ordenar los pokemons haciendo click en sus encabezados.



//  12. Corrige la function sortPokemons para que acepte ordenarlos segun id y name.
