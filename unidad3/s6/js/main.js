/* Caso Propuesto */

const form = document.getElementById('form'); // Llama al form
const inputs = document.querySelectorAll('#form input'); // Llama a los input dentro de form

const expresiones = { // Objeto
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // De 4 a 16 dígitos, solo se acepta letras, numeros, guion y guion bajo
	nombre: /^[A-Z]{1}[a-z]{1,9}(\s[A-Z]{1}[a-z]{1,9})?$/, // Máximo dos palabras, máximo 10 letras por palabra, cada palabra inicia en mayúscula, y solo un espacio
	password: /^.{4,12}$/, // 4 a 12 digitos.
}

const campos = { // Objeto
	// Marca inicialmente todos los campos del formulario como vacíos
	user: false,
	name: false,
	password: false
}

const validarForm = (e) => { // Parámetro e
	switch (e.target.name) { // Llama a los name de cada input
		case 'user':
			validarCampo(expresiones.usuario, e.target, 'user'); // Ejecuta la función validarCampo()
			break;
		
		case 'name':
			validarCampo(expresiones.nombre, e.target, 'name');
			break;

		case 'password':
			validarCampo(expresiones.password, e.target, 'password');
			validarPassword2();
			break;

		case 'password2':
			validarPassword2();
			break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)) {  // Si el input es correcto
		// input.value: accede al valor del input
		// expresion.test: comprueba que el valor ingresado en el input coincida con las RegExp

		// `group_${campo}` -> añade el valor de campo correspondiente
		document.getElementById(`group_${campo}`).classList.remove('form_group-incorrecto'); // classList.remove: remueve una class
		document.getElementById(`group_${campo}`).classList.add('form_group-correcto');
		document.querySelector(`#group_${campo} i`).classList.remove('fa-circle-xmark'); // Quita el icon de equis
		document.querySelector(`#group_${campo} i`).classList.add('fa-circle-check'); // Añade el icon de check
		document.querySelector(`#group_${campo} .form_input_error`).classList.remove('form_input_error-activo'); // Quita el texto con los requisitos
		campos[campo] = true; // Marca a la propiedad respectiva del objeto campos como true
	} else { // Si el input es incorrecto
		document.getElementById(`group_${campo}`).classList.add('form_group-incorrecto'); // classList.add: añade una class
		document.getElementById(`group_${campo}`).classList.remove('form_group-correcto');
		document.querySelector(`#group_${campo} i`).classList.add('fa-circle-xmark'); // Añade el icon de equis
		document.querySelector(`#group_${campo} i`).classList.remove('fa-circle-check'); // Quita el icon de check
		document.querySelector(`#group_${campo} .form_input_error`).classList.add('form_input_error-activo'); // Añade el texto con los requisitos
		campos[campo] = false; // Vuelve a marcar a la propiedad respectiva del objeto campos como false
	}
}

const validarPassword2 = () => {
	const inputPassword = document.getElementById('password').value;
	const inputPassword2 = document.getElementById('password2').value;

	if (inputPassword !== inputPassword2) { // Si la contraseña no es igual a la contraseña repetida
		document.getElementById(`group_password2`).classList.add('form_group-incorrecto');
		document.getElementById(`group_password2`).classList.remove('form_group-correcto');
		document.querySelector(`#group_password2 i`).classList.add('fa-circle-xmark');
		document.querySelector(`#group_password2 i`).classList.remove('fa-circle-check');
		document.querySelector(`#group_password2 .form_input_error`).classList.add('form_input_error-activo');
		campos['password'] = false; // Marca al value de password del objeto campos como false
	} else { // Si la contraseña es igual a la contraseña repetida
		document.getElementById(`group_password2`).classList.remove('form_group-incorrecto');
		document.getElementById(`group_password2`).classList.add('form_group-correcto');
		document.querySelector(`#group_password2 i`).classList.remove('fa-circle-xmark');
		document.querySelector(`#group_password2 i`).classList.add('fa-circle-check');
		document.querySelector(`#group_password2 .form_input_error`).classList.remove('form_input_error-activo');
		campos['password'] = true; // Marca al value de password del objeto campos como true
	}
}

inputs.forEach((input) => { // Por cada input
	input.addEventListener('keyup', validarForm) // Keyup: al dar click al input y luego escribir una tecla
	input.addEventListener('blur', validarForm) // Blur: cuando el input ha perdido su foco
});

form.addEventListener('submit', (e) => { // Parámetro e
	e.preventDefault(); // Evita el comportamiento predeterminado de submit

	if (campos.user && campos.name && campos.password) { // Si los campos están rellenados
		form.reset();

		document.getElementById('form_message_success').classList.add('form_message_success-activo'); // Muestra el mensaje de 'enviado exitosamente'
		setTimeout(() => { // Elimina el mensaje de 'enviado exitosamente' después de 5 segundos
			document.getElementById('form_message_success').classList.remove('form_message_success-activo');
		}, 5000);

		document.querySelectorAll('.form_group-correcto').forEach((icono) => {
			icono.classList.remove('form_group-correcto'); // Elimina los iconos de check después de enviar el formulario
		});

		Object.entries(campos).forEach(([campo, val]) => { // Limpia el objeto campos volviendo a marcar todo como false
            campos[campo] = false;
        });

	} else {
		document.getElementById('form_message').classList.add('form_message-activo'); // Muestra el mensaje de 'Error'

		setTimeout(() => { // Elimina el mensaje de 'Error' después de 5 segundos
			document.getElementById('form_message').classList.remove('form_message-activo');
		}, 5000);
	}
});



	// Inside a Switch Case []
	// if(expresiones.usuario.test(e.target.value)) { // e.target.value: permite acceder al valor del input
	// 	// console.log('user correcto');
	// 	document.getElementById('user_group').classList.remove('form_group-incorrecto'); // classList.remove: remueve una class
	// 	document.getElementById('user_group').classList.add('form_group-correcto');
	// 	document.querySelector('#user_group i').classList.remove('fa-circle-xmark'); // Quita el icon de equis
	// 	document.querySelector('#user_group i').classList.add('fa-circle-check'); // Añade el icon de check
	// 	document.querySelector('#user_group .form_input_error').classList.remove('form_input_error-activo'); // Quita el texto con los requisitos de usuario
	// } else {
	// 	// console.log('user incorrecto');
	// 	document.getElementById('user_group').classList.add('form_group-incorrecto'); // classList.add: añade una class
	// 	document.getElementById('user_group').classList.remove('form_group-correcto');
	// 	document.querySelector('#user_group i').classList.add('fa-circle-xmark'); // Quita el icon de equis
	// 	document.querySelector('#user_group i').classList.remove('fa-circle-check'); // Añade el icon de check
	// 	document.querySelector('#user_group .form_input_error').classList.add('form_input_error-activo'); // Añade el texto con los requisitos de usuario
	// }
