/* Ejercicio 1 */

const btn_pago = document.getElementById('btn_pago');
const p_pago = document.getElementById('p_pago');
const p_0 = document.getElementById('p_0');
const p_1 = document.getElementById('p_1');
const p_2 = document.getElementById('p_2');
const p_3 = document.getElementById('p_3');

btn_pago.addEventListener('click', calcular); // Al dar click al botón lanza la función calcular()

function calcular() {
    const monopolio = parseInt(document.getElementById('monopolio').value);
    const ajedrez = parseInt(document.getElementById('ajedrez').value);
    const lego = parseInt(document.getElementById('lego').value);
    const damas = parseInt(document.getElementById('damas').value);
    const laberinto = parseInt(document.getElementById('laberinto').value);

    let p_monopolio = monopolio * 70.99; // cantidad de juguetes multiplicado por el precio del juguete
    let p_ajedrez = ajedrez * 78.99;
    let p_lego = lego * 100.99;
    let p_damas = damas * 58.50;
    let p_laberinto = laberinto * 35;

    let cantidad = monopolio + ajedrez + lego + damas + laberinto; // cantidad total de juguetes comprados
    let pago_i = p_monopolio + p_ajedrez + p_lego + p_damas + p_laberinto; // pago total sin el descuento

    let descuento = 0;

    if (isNaN(cantidad)) { // Si cantidad es NaN (Not a Number)
        // Evita que algún espacio quede en blanco y de como respuesta NaN
        
        alert('Por favor, rellene los espacios en blanco');

        return false

    } else if (cantidad < 10) { // Si la cantidad es menor a 10
        descuento = pago_i*3.5/100;
        
    } else if (cantidad <= 20) { // Si la cantidad es menor o igual a 20
        descuento = pago_i*7/100;

    } else { // Si la cantidad es mayor a 20
        descuento = pago_i*9.5/100;

    }

    let pago_f = pago_i - descuento; // pago total con el descuento

    p_0.innerText = cantidad;
    p_1.innerText = pago_i.toFixed(2); // toFixed(2) hace que solo se muestren máximo dos decimales
    p_2.innerText = (`-${descuento.toFixed(2)}`);
    p_3.innerText = (`S/${pago_f.toFixed(2)}`);

    return true
}



/* Ejercicio 2 */
const btn_match = document.getElementById('btn_match');  

let usuarios = ["jorge","amaria"];
let contraseñas = ["123456","certus12"]

btn_match.addEventListener('click', match);

function match() {
    const user = document.getElementById('user').value;
    const password = document.getElementById('password').value;  

    for (const i in usuarios) {
        if (user === usuarios[i] && password === contraseñas[i]) { 
            // Si lo escrito en user es igual a el value de usuarios y lo escrito en password es igual al value de contraseñas
            alert("Datos ingresados correctamente");
            return
        }
    }

    alert("Los datos son incorrectos. Vuelva a intentar")
}


// Otra forma de resolverlo, el inconveniente es que se tendría que declarar cada value del array.

// btn_match.addEventListener('click', match);

// function match() {
//     const user = document.getElementById('user').value;
//     const password = document.getElementById('password').value;  

//     if (usuarios[0] === user && contraseñas[0] === password || usuarios[1] === user && contraseñas[1] === password) {
//         alert("Datos ingresados correctamente")
//     } else {
//         alert("Los datos son incorrectos. Vuelva a intentar")
//     }
// }