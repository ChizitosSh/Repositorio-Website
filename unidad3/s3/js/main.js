/* Tarea Asíncrona */
const btn_primo = document.getElementById('btn_primo');
const p_primo = document.getElementById('p_primo');

// Número primo: aquel divisible entre 1 y su mismo valor (0 y 1 no son primos) (2 es un primo)

btn_primo.addEventListener('click', primo);

function primo() {

    const numero = parseFloat(document.getElementById('numero').value);

    // El número 2 es primo

    if (numero===2) {
        p_primo.innerText = 'Es un primo';
        return true;
    }

    // Los números < 2, como 0 y 1, no son primos
    // (n%2) -> reconoce a los números divisible entre dos con residuo 0

    if (!Number.isInteger(numero) || numero<2 || !(numero%2)) {
        p_primo.innerText = 'No es un primo';
        return false;
    }

    for (let i = 3; i <= numero-1; i++) {
        if (numero%i === 0) {
            p_primo.innerText = 'No es un primo';
            return false;
        }
    }

    p_primo.innerText = 'Es un primo';

    return true;
}






/* RETOS */

/* Ejercicio 1 */

const btn_salario = document.getElementById('btn_salario');
const p_salario = document.getElementById('p_salario');

btn_salario.addEventListener('click', salario);

function salario() {
    const horas = parseInt(document.getElementById('horas').value); // Solo se considerarán horas enteras por lo que coloque parseInt()
    const tarifa = parseFloat(document.getElementById('tarifa').value); // La tarifa puede considerar decimales por lo que coloqué parseFloat()

    let salario_i = horas * tarifa; // Salario inicial, cuando ha trabajado 40 horas o menos

    // En caso no se haya colocado algún número y le hacen click al botón
    if (isNaN(horas) || isNaN(tarifa)) {
        p_salario.innerText =`Por favor, rellene los campos`;
        return false;
    }

    if (horas <= 40) { // Si las horas trabajadas son menores o igual a 40 se considerará el salario_i
        p_salario.innerText =`Tu salario es de S/${salario_i}`;
    } else { // Si las horas son mayores a 40
        salario_i = 40 * tarifa; // Se reasignó su valor
        let salario_f = salario_i + (horas - 40)*(tarifa*1.5);

        p_salario.innerText =`Has recibido un aumento, ahora tu salario es de S/${salario_f}`;
    }
}



/* Ejercicio 2 */

const btn_perimetro = document.getElementById('btn_perimetro');
const p_perimetro = document.getElementById('p_perimetro');

btn_perimetro.addEventListener('click', perimetro);

function perimetro() {
    const radio = parseFloat(document.getElementById('radio').value);

    let perimetro = (2 * 3.14) * radio;
    let perimetro_50 = perimetro * 0.5;
    let perimetro_25 = perimetro_50 * 0.75;

    // En caso no se haya colocado algún número y le hacen click al botón
    if (isNaN(radio)) {
        p_perimetro.innerText =`Por favor, rellene el campo`;
        return false;
    }

    p_perimetro.innerText =`El perimetro es ${perimetro.toFixed(2)}, ${perimetro_50.toFixed(2)} y ${perimetro_25.toFixed(2)}`;
}



/* Ejercicio 3 */

const btn_percent = document.getElementById('btn_percent');
const p_0 = document.getElementById('p_0');
const p_1 = document.getElementById('p_1');
const p_2 = document.getElementById('p_2');
const p_3 = document.getElementById('p_3');
const p_4 = document.getElementById('p_4');

btn_percent.addEventListener('click', percent);

function percent() {
    console.log('it works!')

    const salary = parseFloat(document.getElementById('salary').value);
    const hours = parseInt(document.getElementById('hours').value);

    let salary_f = salary * hours;

    p_0.innerText = 'S/'+salary_f;
    p_1.innerText = 'S/'+salary_f*0.1;
    p_2.innerText = 'S/'+salary_f*0.3;
    p_3.innerText = 'S/'+salary_f*0.6;
    p_4.innerText = 'S/'+salary_f*0.8;
}



/* Ejercicio 4 */
const btn_calificacion = document.getElementById('btn_calificacion');
const p_calificacion = document.getElementById('p_calificacion');

btn_calificacion.addEventListener('click', parcialProm);

function calificacion(parcialPromedio) {
    const examen = parseInt(document.getElementById('examen').value);
    const trabajo = parseInt(document.getElementById('trabajo').value);

    let promedios = (parcialPromedio * 0.55) + (examen * 0.3) + (trabajo * 0.15);
    
    p_calificacion.innerText = `La calificación final es ${promedios.toFixed(2)}`;
}

function parcialProm() { // Saca el promedio de los tres parciales separadas por comas
    const parcial = document.getElementById('parcial').value;

    let parcialCortado = parcial.split(","); // Separa los valores por comas

    let parsear = parcialCortado.map(function(str) { // using map() to convert array of strings to numbers
        return parseInt(str);
    });

    let parcialSuma = parsear.reduce((a, b) => a + b, 0);
    let parcialPromedio = parcialSuma/3;

    calificacion(parcialPromedio)
}



/* Ejercicio 5 */
const btn_presupuesto = document.getElementById('btn_presupuesto');
const p_gineco = document.getElementById('p_gineco');
const p_traumato = document.getElementById('p_traumato');
const p_pedia = document.getElementById('p_pedia');


btn_presupuesto.addEventListener('click', presupuestoH);

function presupuestoH() {
    const presupuesto = document.getElementById('presupuesto').value;

    let ginecologia = presupuesto * 0.4;
    let traumatologia = presupuesto * 0.3;
    let pediatria = presupuesto * 0.3;

    p_gineco.innerText = "S/" + ginecologia;
    p_traumato.innerText = "S/" + traumatologia;
    p_pedia.innerText = "S/" + pediatria;
}