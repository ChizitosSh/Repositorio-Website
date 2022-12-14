/* Ejercicio 1 */

// Crear una función que convierta los string que se ingresan como parámetros a estilo capitalizado.

const btn_capitalize = document.getElementById('btn_capitalize');
const p_capitalize = document.getElementById('p_capitalize');

btn_capitalize.addEventListener('click', capitalize);

function capitalize() {
    const string = document.getElementById('string').value;

    let stringCortado = string.split(" ");
    let newArray = []

    for (const index of stringCortado) {
        let firstLetter = index[0].toUpperCase() + index.slice(1); //

        newArray.push(firstLetter)
    }

    p_capitalize.innerText = (newArray.join(" "));
}




/* Ejercicio 2 */

// Dado el siguiente objeto, crear una función que verifique si todos los atributos se encuentran llenos.

const btn_verificar2 = document.getElementById('btn_verificar2');

btn_verificar2.addEventListener('click', revisarVacio); // Al dar click al botón lanzará la función

function revisarVacio() {
    let user = { // Objeto brindado por el problema
        nombre: document.getElementById('nombre').value,
        apellido: document.getElementById('apellido').value,
        edad: document.getElementById('edad').value,
        profesion: document.getElementById('profesion').value
    }

    for (const prop in user) {
        if (user[prop] === "") {
            alert(`El dato ${prop} esta vacío, por favor ingréselo`);
        }
    }
}




/* Ejercicio 3 */

// Para el ejercicio anterior, crear una función que dados los datos pendientes, lance un prompt
// para que el usuario complete los datos faltantes.

const btn_verificar3 = document.getElementById('btn_verificar3');

btn_verificar3.addEventListener('click', rellenarDatos);

function rellenarDatos() {
    let user = { // Objeto brindado por el problema
        nombre: document.getElementById('nombre').value,
        apellido: document.getElementById('apellido').value,
        edad: document.getElementById('edad').value,
        profesion: document.getElementById('profesion').value
    }

    for (const prop in user) {
        if (user[prop] === "") {
            user[prop] = prompt(`El dato ${prop} esta vacío, por favor ingréselo:`);
        }
    }

    console.log(user);
}




/* Ejercicio 4 */

// Te enviaron una base de datos de usuario:

let users = [
    {nombre: "", apellido: "Pacheco", edad: 38, profesion: ""},
    {nombre: "Andrea", apellido: "", edad: 25, profesion: "profesor"},
    {nombre: "Julia", apellido: "", edad: 32, profesion: "musico"},
    {nombre: "", apellido: "Martinez", edad: 29, profesion: "programador"},
    {nombre: "Roberto", apellido: "Mattos", edad: 40, profesion: ""},
    {nombre: "Mercedes", apellido: "Sanchez", edad: 35, profesion: "veterinario"},
]

// Te piden que evalues que usuarios tienen datos pendientes
// En caso no existan, solicitar el ingreso de los datos a través del prompt

const btn_verificar4 = document.getElementById('btn_verificar4');

btn_verificar4.addEventListener('click', verificarDatos);

function verificarDatos() {
    console.log(users);

    // console.log(users[5]) // El quinto object

    // console.log(users[5].nombre) // El value de 'nombre' dentro del quinto object

    console.log(users.sort((a,b) => {return a.edad - b.edad}));
    

    for (const user of users) {

        // let empty = Object.values(user);
        // console.log(user.nombre)

        // console.log('This are the keys')
        // let keys = Object.keys(user);
        // console.log(keys)
        
        // console.log('This are values')
        // let values = Object.values(user);
        // console.log(values)

        let nombreVacio = users.find( nombreVacios => nombreVacios.nombre === "");

        if (nombreVacio) {
            users[user].nombre.push(prompt);
            prompt('Rellenar nombre')
        }

        // console.log('This are entries')
        // let entries = Object.entries(user);
        // console.log(entries)
    }

}


/* Ejercicio 5 */
// Crear una función que permita ordenar los usuarios por edad de menor a mayor

const btn_verificar5 = document.getElementById('btn_verificar5');

btn_verificar5.addEventListener('click', ordenar);

function ordenar() {
    console.log(users.sort((a,b) => {return a.edad - b.edad}));
}