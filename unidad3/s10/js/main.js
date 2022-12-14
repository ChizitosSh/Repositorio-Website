/* Tarea Asíncrona */

const btn_alumno = document.getElementById('btn_alumno');
const p_alumno1 = document.getElementById('p_alumno1');
const p_alumno2 = document.getElementById('p_alumno2');
const p_alumno3 = document.getElementById('p_alumno3');

btn_alumno.addEventListener('click', calcular);

// 1.   Crear una clase Alumnos con los atributos: código, nombre, nota1, nota2 y nota 3;
//      y las operaciones promedio (), condicion () y obsequio ()

function calcular() {
    console.log('it works!');
    const codigo = document.getElementById('codigo').value;
    const nombre = document.getElementById('nombre').value;
    const nota1 = document.getElementById('nota1').value;
    const nota2 = document.getElementById('nota2').value;
    const nota3 = document.getElementById('nota3').value;
    const nota4 = document.getElementById('nota4').value;

    class Alumnos {
        constructor(codigo, nombre, nota1, nota2, nota3, nota4){
            this.codigo = codigo;
            this.nombre = nombre;
            this.nota1 = nota1;
            this.nota2 = nota2;
            this.nota3 = nota3;
            this.nota4 = nota4;
        };
        promedio = () => {};
        condicion = () => {};
        obsequio = () => {};
    }

    let alumno = new Alumnos(codigo, nombre, nota1, nota2, nota3, nota4, calcularPromedio(), calcularCondicion(), calcularObsequio());

    console.log(alumno)
}


// 2.   Para calcular el promedio considere la siguiente fórmula:
//      PROM = nota1(15%) + nota2(20%) + nota3(25%) + nota4(40%)

function calcularPromedio() {
    nota1 = document.getElementById('nota1').value;
    nota2 = document.getElementById('nota2').value;
    nota3 = document.getElementById('nota3').value;
    nota4 = document.getElementById('nota4').value;

    let promedio = (nota1 * 0.15) + (nota2 * 0.20) + (nota3 * 0.25) + (nota4 * 0.40);

    p_alumno1.innerText = promedio.toFixed(2);

    return promedio
}

//3.    Para la condición determine si es “Aprobado” o “Desaprobado” (se aprueba con nota mínima 12).

function calcularCondicion() {
    if(calcularPromedio() >= 12) {
        p_alumno2.innerText = 'Aprobado';
        console.log('alumno aprobado');
    } else {
        p_alumno2.innerText = 'Desaprobado';
        console.log('alumno desaprobado');
    }
}

//4.    Todo alumno que apruebe con nota mayor a 17 se le obsequiará una “Mochila”.

function calcularObsequio() {
    if (calcularPromedio() > 17) {
        p_alumno3.innerText = 'Ganaste una mochila';
        console.log('mochila');
    } else {
        p_alumno3.innerText = 'Estudia más la próxima';
        console.log('estudia más la próxima')
    }
}