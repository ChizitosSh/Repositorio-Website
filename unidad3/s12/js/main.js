
const root = document.getElementById("root");
let users = [
    {id: 1, nombre: "Andres", apellido: "Pacheco", edad: 38, profesion: "developer", created_at: "2022-09-26T06:25:21.118Z"},
    {id: 2, nombre: "Andrea", apellido: "Sanchez", edad: 25, profesion: "profesor", created_at: "2022-04-18T14:14:32.879Z"},
    {id: 3, nombre: "Julia", apellido: "Ochoa", edad: 32, profesion: "musico", created_at: "2021-12-14T11:53:38.279Z"},
    {id: 4, nombre: "Samuel", apellido: "Martinez", edad: 29, profesion: "programador", created_at: "2022-01-26T03:31:15.202Z"},
    {id: 5, nombre: "Roberto", apellido: "Mattos", edad: 40, profesion: "chef", created_at: "2022-07-27T02:06:22.760Z"},
    {id: 6, nombre: "Mercedes", apellido: "Sanchez", edad: 35, profesion: "veterinario", created_at: "2022-05-01T22:06:35.864Z"},
]




// READ

const h1 = document.createElement('h1'); // Crea un h1
h1.textContent = 'JavaScript CRUD'
h1.classList.add("text-center", "my-5") // Agrega clases de Bootstrap


const seccionUsers = document.createElement("section"); // Crea un section
seccionUsers.classList.add("container", "mt-5"); // Agrega clases de Bootstrap

seccionUsers.append(h1) // Inserta el h1 dentro del section
root.append(seccionUsers); // Inserta el section dentro del root


const tabla = document.createElement("table"); // Crea un table
tabla.classList.add("table", "table-striped", "table-dark");

seccionUsers.append(tabla); // Inserta el table dentro del section
crearTabla(); // Lanza la function crearTabla
function crearTabla() {
  tabla.innerHTML = "";
  crearCabezadoUsuarios(); // Llama la function que crea el thead/encabezado
  construirCuerpo(); // Llama la function que crea el cuerpo
}


function construirCuerpo() {
  for (const index in users) {
    const tbody = document.createElement("tbody");
    const tr = document.createElement("tr");
    for (const key in users[index]) {
      const td = document.createElement("td");
      td.classList.add("px-3");
      td.textContent = users[index][key];
      tr.append(td);
    }
    tabla.append(tr);
  }
}



function crearCabezadoUsuarios(){
  const encabezados = document.createElement("thead");
  const tr = document.createElement("tr");

  for (const key in users[0]){
      const th = document.createElement("th")
      th.textContent = capitalizarPalabra(key);
      th.style.cursor = "pointer";
      th.addEventListener("click", () =>{
          ordenarPorArgumento(key);
          tabla.innerHTML = ""
          tabla.append(encabezados)
          construirCuerpo()
      });
      tr.append(th)
  }
  
  encabezados.append(tr);
  tabla.append(encabezados);
  }


  function capitalizarPalabra(palabra){
    return palabra.charAt(0).toUpperCase() + palabra.slice(1)
  }
  

// // CREATE


// Función para crear usuarios nuevos
function crearDatosUsuario() {
  let datosUsuario = prompt("Ingrese la información del usuario (nombre, apellido, edad, profesión)");

  if(datosUsuario !== null){
    let usuarioArray = datosUsuario.split(","); 
    let fecha = new Date;
    let usuario = {id: users.length + 1}
    usuario.nombre = usuarioArray[0];
    usuario.apellido = usuarioArray[1];
    usuario.edad = usuarioArray[2];
    usuario.profesion = usuarioArray[3];
    usuario.created_at = fecha.toISOString();
    users.push(usuario);
}
return users
}



//Botón Agregar
const crearUsuario = document.createElement("section");
seccionUsers.append(crearUsuario);

const btnCrear = document.createElement("button");
const i_crear = document.createElement('i');

btnCrear.classList.add("btn", "btn-primary");
i_crear.classList.add("bi", "bi-box-arrow-in-up-left")

btnCrear.textContent = "Crear Usuario";
btnCrear.append(i_crear)

crearUsuario.append(btnCrear);

btnCrear.addEventListener("click", () => {
  crearDatosUsuario(users);
  crearTabla();
  saveInLocalStorage();
});



// Victor


function saveInLocalStorage() {
    //como no se pueden guardar array en localstorage, convertimos nuestro array en JSON y de esta manera localstorage puede almacenar nuestros usuarios
    console.log(users,'usuarios antes de json');
    localStorage.setItem("usuarios", JSON.stringify(users));
  };
  
// //   function pintarHTML() {
// //     root.innerHTML = "";
// //     //leemos el JSON del localstorage y parseamos a array para poder realizar una lectura de el y mostrar en pantalla
// //     users = JSON.parse(localStorage.getItem("users"));
// //     //console.log(arrayActividades)
  
// //     if ( users === null ) {
// //       users = []; //cuando el localstorage este vacio, definir el array como vacio
// //       table.innerHTML = `
// //           <div class="alert alert-primary" role="alert">
// //               <b>Lista Vacia</b>
// //           </div>
// //           `;
// //     } else {
// //       users.forEach((element) => {
// //         element.estado
// //           ? //concateno cada elemento del array en mi lista de actividades
// //           (table.innerHTML += `
// //               <div class="alert alert-success" role="alert">
// //                   <b>${element.id} - ${element.nombre}</b> - ${element.apellido} - ${element.edad} - ${element.profesion} 
// //               </div>
// //               `)
// //           : //concateno cada elemento del array en mi lista de actividades
// //           (table.innerHTML += `
// //               <div class="alert alert-danger" role="alert">
// //                   <b>${element.id} - ${element.nombre}</b> - ${element.apellido} - ${element.edad} - ${element.profesion} 
// //               </div>
// //               `);
// //       });
// //     }
// //   };



// UPDATE

function modificarDatos(argumento) {
  let id = prompt(`Ingrese el id del usuario`);
  if (id == "") {
    return "Para modificar debes ingresar el id";
  }
  let usuario = users;
  argumento.forEach((user, i) => {
    if (user.id == id) {
      usuario[i].nombre = prompt(`Nombre es:`);
      usuario[i].apellido = prompt(`Apellido es:`);
      usuario[i].edad = prompt(`Edad es:`);
      usuario[i].profesion = prompt(`Profesión es:`);
      usuario[i].fechaActualizacion = new Date().toISOString();
    }
  });

  users = usuario;
  return users;
}

//Botón Modificar
const modificar = document.createElement("section");
seccionUsers.append(modificar);

const btnModificar = document.createElement("button");
const i_modificar = document.createElement("i");

btnModificar.classList.add("btn", "btn-warning", "text-light");
i_modificar.classList.add("bi", "bi-pencil-square")

btnModificar.textContent = "Modificar";
btnModificar.append(i_modificar)

modificar.append(btnModificar);

btnModificar.addEventListener("click", () => {
  modificarDatos(users);
  crearTabla();
});



// DELETE

// const btnBorrar = document.createElement("button");
// btnBorrar.classList.add("btn", "btn-danger");
// btnBorrar.textContent = "Eliminar";
// crearUsuario.append(btnBorrar);

// btnBorrar.addEventListener("click", deleteUser);

// function deleteUser(){
//   let id = prompt("Ingrese el id del registro que desea borrar:");
//   if(id){
//     let registro = users.find(user => user.id == id);
//     if(registro) {
//       if (confirm("¿Está seguro de que desea eliminar el registro?")){
//         users = users.filter(user => user.id != id);
//         tabla.innerHTML = "";
//         crearTabla();
//         alert("Registro eliminado exitosamente");
//       }
//     } else {
//       alert("El id ingresado no existe");
//     }
//   }
// }




//Botón Eliminar
const eliminar = document.createElement("section");
seccionUsers.append(eliminar);

const btnEliminar = document.createElement("button");
const i_eliminar = document.createElement("i");

btnEliminar.classList.add("btn","btn-danger");
i_eliminar.classList.add("bi", "bi-trash3-fill")

btnEliminar.textContent = "Eliminar";
btnEliminar.append(i_eliminar)

eliminar.append(btnEliminar);
btnEliminar.addEventListener("click", () => {
  const id = prompt("Ingresa el ID del registro que deseas eliminar:")
  let confirmar = prompt("¿Estás seguro de querer eliminar el registro? ingrese (Si)")
  if(confirmar == "Si" || confirmar == "si" || confirmar == "SI"){
      users = eliminarDatos(id)
  }else{
      return
  }
  // eliminarDatos(users);
  crearTabla();
});

function eliminarDatos(id){
  return users.filter((argumento) => argumento.id != id)
}






// ADICIONAL

var ordenAscendente = true; // Variable para llevar la cuenta del orden actual

function ordenarPorArgumento(property) {

  // Creamos la función de comparación que se usará en el método sort()

  function comparar(a, b) {
    if (ordenAscendente) {
      // Ordenamos de menor a mayor
        if (typeof users[0][property] === "string"){ // Si es un string
            console.log('is an string')
            return a[property].localeCompare(b[property])

        } else if (typeof users[0][property] === "number"){ // Si es un número
            console.log('is a number');
            return a[property] - b[property]
            
        } else {
            return "Por favor utiliza un atributo válido"
        }
    } else {
      // Ordenamos de mayor a menor
        if (typeof users[0][property] === "string"){ // Si es un string
            console.log('is an string')
            return b[property].localeCompare(a[property])

        } else if (typeof users[0][property] === "number"){ // Si es un número
            console.log('is a number');
            return b[property] - a[property]
            
        } else {
            return "Por favor utiliza un atributo válido"
        }
    }
  }

  // Ordenamos el array usando el método sort() y la función de comparación creada
  users.sort(comparar);

  // Cambiamos el valor de la variable para llevar la cuenta del próximo orden
  ordenAscendente = !ordenAscendente;
}