/* Caso Propuesto 1 */
const btn_number = document.getElementById('btn_number');
const p_number = document.getElementById('p_number');

btn_number.addEventListener('click', match);

// 1. Número entero de 3 cifras
function match() {
    let number = (document.getElementById('number').value);

    const minimo = /^(?=.{3,3}$)/ // El número ingresado debe tener 3 cifras

    if (number.match(minimo)) {
        comparar(); // Si number tiene 3 cifras entonces lanza la función comparar()
        return true;
    } else {
        alert('inserte un número de 3 dígitos'); // Caso contrario se muestra el alert()
        return false;
    }
}

// 2. Reconocer si las cifras de number son iguales o diferentes
function comparar() {
    let number = (document.getElementById('number').value);

    let compararCifras = number % 10; // Resto del número ingresado dividido entre 10

    while (number > 0) { // Mientras el número ingresado sea mayor a 0
        if (compararCifras != number % 10) { // Si primerDigito es diferente al resto del número ingresado dividido entre 10
            alert('números diferentes'); // Si ya se evaluaron los dígitos del número y resultaron ser diferentes soltará el alert

            diferentes(); // Si el if se cumple entonces lanza la función diferentes()

            return false; // Detiene el while
        }

        number = parseInt(number / 10); // Si el if no se cumple, entonces se divide el número ingresado entre 10 y obtenemos su valor entero y el while continúa ejecutándose
    }

    alert('números iguales'); // Si ya se evaluaron todos los dígitos del número y resultaron ser iguales soltará el alert
    iguales();

    return true;
}

// 3. Si las cifras son iguales, soltará la siguiente función
function iguales() {
    // 3.1 Hallar la suma de las raíces cuadradas de las cifras
    let number = (document.getElementById('number').value);

    let raizSuma = 0;

    while (number > 0) {
        let cifras = number % 10;

        let raices = Math.pow(cifras,1/2);
        raizSuma += raices;

        p_number.innerText = raizSuma.toFixed(2);

        number = parseInt(number/10);
    }
}

// 4. Si las cifras son diferentes, soltará la siguiente función
function diferentes() {
    // 4.1 Hallar la suma de los cuadrados de las cifras
    let number = (document.getElementById('number').value);

    let cuadradosSuma = 0;

    while (number > 0) {
        let cifras = number % 10;

        let cuadrados = Math.pow(cifras,2);
        cuadradosSuma += cuadrados;

        p_number.innerText = cuadradosSuma;

        number = parseInt(number/10);
    }

}





/* Caso Propuesto 2 */

const btn_validacion_p = document.getElementById('btn_validacion_p');
const p_validacion_p = document.getElementById('p_validacion_p');

btn_validacion_p.addEventListener('click', validar);

function validar() {
    const password = document.getElementById('password').value;

    let minusculas = /[a-z]/;
    let mayuscula = /[A-Z]/;
    let signo = /[_@]/;
    let numero = /[0-9]/;
    let minimo = new RegExp('(?=.{10})');

    if (password.match(minusculas && minimo) && password.match(mayuscula) && password.match(signo) && password.match(numero)){
        p_validacion_p.innerText ='La contraseña ingresada es válida'; 
    } else {
        p_validacion_p.innerText ='La contraseña ingresada es inválida';
    }
}





/* Caso Propuesto 3 */

const btn_validacion_e = document.getElementById('btn_validacion_e');
const p_validacion_e = document.getElementById('p_validacion_e');

btn_validacion_e.addEventListener('click', validar_e);

function validar_e(){
    const email = document.getElementById('email').value;
    const pattern = /@certus.edu.pe/; // RegEx para que el email a ingresar tenga la forma correcta
    const space = /^\S*$/; // RegEx para que el email no contenga espacios
  
    if (email.match(pattern) && email.match(space)) { // Si la constante email coincide con pattern y email
      p_validacion_e.innerText = 'El correo ingresado es válido';
    } else { // Caso contrario
        p_validacion_e.innerText = 'El correo ingresado es inválido';
    };
}