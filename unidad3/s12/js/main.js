let pokemons = [
    { id: 1, name: "charmander", type: "fire", base_damage: 10, base_hp: 12, speed: 30 },
    { id: 2, name: "squirtle", type: "water", base_damage: 9, base_hp: 14, speed: 26 },
    { id: 3, name: "bulbasaur", type: "leaf", base_damage: 8, base_hp: 16, speed: 26 },
    { id: 4, name: "pikachu", type: "electric", base_damage: 12, base_hp: 8, speed: 32 },
    { id: 5, name: "pidgey", type: "air", base_damage: 10, base_hp: 10, speed: 35 },
    { id: 6, name: "goldeen", type: "water", base_damage: 9, base_hp: 12, speed: 32 },
    { id: 7, name: "bellsprout", type: "leaf", base_damage: 10, base_hp: 12, speed: 30 },
    { id: 8, name: "magnemite", type: "electric", base_damage: 9, base_hp: 14, speed: 30 },
    { id: 9, name: "ponyta", type: "fire", base_damage: 12, base_hp: 18, speed: 36 },
    { id: 10, name: "evee", type: "normal", base_damage: 10, base_hp: 12, speed: 30 },
]
  
  function sortByArgument(property) {
    if (typeof pokemons[0][property] === "string") { // Si es un string
      console.log('is an string')
      return pokemons.sort((a, b) => { return a[property].localeCompare(b[property]) })
  
    } else if (typeof pokemons[0][property] === "number") { // Si es un número
      console.log('is a number');
      return pokemons.sort((a, b) => { return a[property] - b[property] })
  
    } else {
      return "Por favor utiliza un atributo válido"
    }
  }
  
  // Ejercicio 1.1
  
  const root = document.getElementById('root');
  const table = document.createElement('table');
  
  table.setAttribute('border', '1')
  
  const thead = document.createElement('thead');
  const trHead = document.createElement('tr'); // Un sola row
  
  root.append(table)
  table.append(thead)
  thead.append(trHead);
  
  for (const key in pokemons[0]) { // Para el thead
    const th = document.createElement('th'); // Un th por cada atributo
  
    th.textContent = key.toUpperCase()
    th.style.cursor = 'pointer'
  
  //  Ejercicio 1.2
  
    th.addEventListener('click', (e) => {
      sortByArgument(key)
      tbody.innerHTML = ''
      table.append(tbody)
      construirCuerpo()
    });
  
    trHead.append(th)
  }
  
  const tbody = document.createElement('tbody');
  
  table.append(tbody)
  
  construirCuerpo()
  
  function construirCuerpo() {
    for (const index in pokemons) { // Para el body
      const trBody = document.createElement('tr'); // 9 row, una por cada pokemon
  
      for (const key in pokemons[index]) {
        const td = document.createElement('td');
        td.textContent = pokemons[index][key] // Llama al value de key
  
        trBody.append(td)
      }
  
      tbody.append(trBody)
  
    }
  }
  
  
  // Ejercicio 2

  const revisar_persona = document.getElementById('revisar_persona')

  revisar_persona.addEventListener('click', revisarVacio)

  let persona = { // Objeto dado por el problema
    nombre: "",
    apellido: "Pacheco",
    edad: 38,
    profesion: "",
  }
    
  function revisarVacio() {  
    for (const prop in persona) {
      if (persona[prop] === "") {
        alert(`El dato ${prop} esta vacío, por favor ingréselo`);
      }
    }
  
    rellenarDatos(persona) // Llama a la función del ejercicio 3
  }
  
  // Ejercicio 3
  
  function rellenarDatos(persona) {
    for (const prop in persona) {
      if (persona[prop] === "") {
        persona[prop] = prompt(`El dato ${prop} esta vacío, por favor ingréselo:`);
      }
    }
  
    console.log(persona)
  }
  
  // Ejercicio 4

  const revisar_personas = document.getElementById('revisar_personas');

  revisar_personas.addEventListener('click', completarDatos)
                                                  
  let users_1 = [
      {nombre: "", apellido: "Pacheco", edad: 38, profesion: ""},
      {nombre: "Andrea", apellido: "", edad: 25, profesion: "profesor"},
      {nombre: "Julia", apellido: "", edad: 32, profesion: "musico"},
      {nombre: "", apellido: "Martinez", edad: 29, profesion: "programador"},
      {nombre: "Roberto", apellido: "Mattos", edad: 40, profesion: ""},
      {nombre: "Mercedes", apellido: "Sanchez", edad: 35, profesion: "veterinario"},
  ]

  function completarDatos() {
    for (const usuario in users_1) {
      let i = users_1[usuario];
      if (!i.nombre) {
        i.nombre = prompt("Ingresa el nombre del usuario");
      }
      if (!i.apellido) {
        i.apellido = prompt("Ingresa el apellido del usuario");
      }
      if (!i.profesion) {
        i.profesion = prompt("Ingresa la profesión del usuario");
      }
    }

    console.log(users_1)
  }
      
      
  // Ejercicio 5
  
  const ordenar = document.getElementById('ordenar')

  ordenar.addEventListener('click', ordenarPorEdad)
      
  let users_2 = [
      {nombre: "Andres", apellido: "Pacheco", edad: 38, profesion: "developer"},
      {nombre: "Andrea", apellido: "Sanchez", edad: 25, profesion: "profesor"},
      {nombre: "Julia", apellido: "Ochoa", edad: 32, profesion: "musico"},
      {nombre: "Samuel", apellido: "Martinez", edad: 29, profesion: "programador"},
      {nombre: "Roberto", apellido: "Mattos", edad: 40, profesion: "chef"},
      {nombre: "Mercedes", apellido: "Sanchez", edad: 35, profesion: "veterinario"},
  ]
  
  function ordenarPorEdad() {
    console.log(users_2.sort((a, b) => { return a.edad - b.edad }));
  }
  
  // Ejercicio 6 -vreytor
  //Crear una funcion que nos permita escribir los datos de cada usuario en el navegador linea por linea de la siguiente manera:
  // 1. Recorrer el arreglo users
  // 2. Obtener los valores de cada llave
  // 3. Formar la frase nombre apellido tiene edad años y es profesion
  // 4. Escribir esta frase en el navegador linea por linea
  // Ejemplo: "Andres Soto tiene 28 años y es profesor" 
   
  function crearUsuario() {
  
    users_2.forEach( element => {
      console.log(element,'element');
    })

    // let nombreId = document.getElementById('nombre').value;
    // let apellidoId = document.getElementById('apellido').value;
    // let edadId = document.getElementById('edad').value;
    // let profesionId = document.getElementById('profesion').value;
    
    if( nombreId != '' && apellidoId != '' && edadId != '' && profesionId != '') {
      
    //   objectUser = { 
    //      nombre: nombreId,
    //      apellido: apellidoId,
    //      edad: edadId,
    //      profesion: profesionId,
    //   };
      
    //   users_2.push( objectUser );  
       
    //   let { nombre, apellido, edad, profesion } = objectUser;
      
      return window.alert(`${nombre} ${apellido} tiene ${edad} años y es ${profesion}`);
        
        
     } else {
        return window.alert('Debe completar todos los campos');
    }  
  
  }
  
  
  //Ejercicio 7
  //Crear una funcion que nos permita ingresar el parametro por el cual se va a ordenar la lista de usuarios y retorne la lista ordenada.
  
  function ordenarUsuario() {
    let property = document.getElementById('valueSelected').value;
    console.log(property,'propiedad llegada');
    if (typeof users[0][property] === "string") { // Si es un string
      console.log('is an string');
      console.log(users, 'users ordenados supuestamente');
      return users.sort((a, b) => { return a[property].localeCompare(b[property]) })
  
    } else if (typeof users[0][property] === "number") { // Si es un número
      console.log('is a number');
      console.log(users,'users ordenados supuestamente');
      return users.sort((a, b) => { return a[property] - b[property] })
  
    } else {
      return "Por favor utiliza un atributo válido"
    }
  }
  
  
  // Ejercicio 8
  
  const btnAceptar = document.getElementById('aceptar');
  
  btnAceptar.addEventListener('click', botonAceptar)

  function botonAceptar() {
    alert('De acuerdo!')
  }


  // Ejercicio 9

  const btnHover = document.getElementById('btnHover');
  
  btnHover.addEventListener('mouseover', btnDesaparecer)

  function btnDesaparecer() {
    btnHover.style.display = "none";
  }

                            
  // Ejercicio 10

  const ingresarUsuario = document.getElementById('ingresarUsuario')

  ingresarUsuario.addEventListener('click', ingresaDatos)
  
  let usuarios = [];
  
  function ingresaDatos() {
      let datosUsuario = prompt("Ingrese la información del usuario (nombre, apellido, edad, profesión)");
  
      let usuarioArray = datosUsuario.split(", "); // Separa los datos mediante una coma en un array
  
      let nombre = usuarioArray[0];
      let apellido = usuarioArray[1];
      let edad = usuarioArray[2];
      let profesion = usuarioArray[3];
  
      let usuario = {
          id: usuarios.length + 1, // Esto le dará un id único a cada usuario
          nombre: nombre,
          apellido: apellido,
          edad: edad,
          profesion: profesion
      };
  
      usuarios.push(usuario);

      console.log(usuarios); // Forma el array en la consola
  }
  

  // Ejercicio 11
  
  const p_11 = document.getElementById('ejercicio11');
  
   const obj = {};
   const momento_actual = new Date();
   obj.created_date = momento_actual;
  console.log(obj.created_date);
  p_11.innerText = obj.created_date;