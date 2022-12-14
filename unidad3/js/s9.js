/* Tarea de clase */

// Crear un objeto Pokemon con los atributos: nombre, nivel, tipo (gras, fuego, agua, normal, etc.),
// hablar -> Mi nombre es <nombre del pokemon> y soy de nivel <nivel del pokemon>

let Pokemones = {
    nombre: 'Bulbasaur',
    nivel: 1,
    tipo: ['Planta', 'Veneno'],
    hablar: function() {
        alert('Mi nombre es ' + (this).nombre + ' y soy de nivel ' + (this).nivel)
    }
};

// console.log(Pokemones.hablar());



/* Tarea Asíncrona */

const btn_sueldos = document.getElementById('btn_sueldos');
const p_sueldo1 = document.getElementById('p_sueldo1'); // Respuesta de sueldo Bruto
const p_sueldo2 = document.getElementById('p_sueldo2'); // Respuesta de descuento
const p_sueldo3 = document.getElementById('p_sueldo3'); // Respuesta de sueldo Neto

btn_sueldos.addEventListener('click', calcular);

function calcular() {
    const codigo = document.getElementById('codigo').value;
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const cargo = document.getElementById('cargo').value;

    class Datos {
        codigo = 00000;
        nombre = 'ingrese nombre';
        apellido = 'ingrese apellido';
        email = 'ingrese email';
        cargo = 'elija el cargo';
    }

    // Ingresa los nuevos datos en el objecto Datos
    let empleado = new Datos()
    empleado.codigo = codigo;
    empleado.nombre = nombre;
    empleado.apellido = apellido;
    empleado.email = email;
    empleado.cargo = cargo;

    // Si uno o varios inputs están vacíos:
    if (codigo == '' || nombre == '' || apellido == '' || email == '' || cargo == '') {
        alert('ingrese los datos faltantes')
        return false
    }

    console.log(empleado)

    calcularSueldo(cargo) // Lanza la función calcularSueldo y lleva la constante cargo
}

function calcularSueldo(cargo) {
    let sueldo = {
        jefe: 5000,
        analista: 4000,
        programador: 3000,
        soporte: 2000,
        asistente: 1500
    }

    let sueldoBruto = 0;
    let descuento = 0;
    let sueldoNeto = 0;

    switch (cargo) {
        case 'jefe':
            sueldoBruto = sueldo.jefe;
            descuento = sueldoBruto*0.125;
            sueldoNeto = sueldoBruto - descuento;
            break
        
        case 'analista':
            sueldoBruto = sueldo.analista;
            descuento = sueldoBruto*0.125;
            sueldoNeto = sueldoBruto - descuento;
            break
        
        case 'programador':
            sueldoBruto = sueldo.programador;
            descuento = sueldoBruto*0.125;
            sueldoNeto = sueldoBruto - descuento;
            break

        case 'soporte':
            sueldoBruto = sueldo.soporte;
            descuento = sueldoBruto*0.125;
            sueldoNeto = sueldoBruto - descuento;
            break

        case 'asistente':
            sueldoBruto = sueldo.asistente;
            descuento = sueldoBruto*0.125;
            sueldoNeto = sueldoBruto - descuento;
            break
    }

    p_sueldo1.innerText = sueldoBruto;
    p_sueldo2.innerText = descuento;
    p_sueldo3.innerText = sueldoNeto;
}