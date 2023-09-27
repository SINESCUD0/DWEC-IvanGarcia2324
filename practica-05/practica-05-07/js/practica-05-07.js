window.onload=inicio;
function inicio(){
	document.formulario.boton.onclick=comprobar;
}

function comprobar(){
	let VstNombre = document.formulario.nombre.value;
	var ernombre=/^[a-záéíóúüñ][ºª\- a-záéíóúüñ]{1,25}[a-záéíóúüñ]$/i;
	if(ernombre.test(VstNombre)){
		document.formulario.mensaje.value = "Validación correcta";
	}else{
		document.formulario.mensaje.value = "Validación incorrecta";
	}
}