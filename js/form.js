const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	nom_ape: /^[a-zA-ZÀ-ÿ\s]+$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}

const campos = {
	nombre: false,
	apellido: false,
	correo: false,
	comentario: false,
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "nombre":
			validarCampo(expresiones.nom_ape,e.target,'nombre');
			break;
		case "apellido":
			validarCampo(expresiones.nom_ape,e.target,'apellido');
			break;
		case "correo":
			validarCampo(expresiones.correo,e.target,'correo');
			break;
		case "comentario":
			validarCometario();
			break;
	}
}

const validarCampo = (expresion,input,campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}

const validarCometario = () => {
	com = document.getElementById('comentario').value;
	
	if(com.length == 0) {
		document.getElementById(`grupo__comentario`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__comentario`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__comentario i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__comentario i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__comentario .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos['comentario'] = false;

	} else {
		document.getElementById(`grupo__comentario`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__comentario`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__comentario i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__comentario i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__comentario .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos['comentario'] = true;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur',validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	if(campos.nombre && campos.apellido && campos.correo && campos.comentario){
		formulario.reset();
		
		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});

	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');

		setTimeout(() => {
			document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
		}, 5000);
	}
});
