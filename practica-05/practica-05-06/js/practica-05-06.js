window.onload=inicio;
function inicio(){
	document.formulario.boton.onclick=calcular;
}

function calcular(){
	let VstCadena = document.formulario.cadena.value;
	let VstVocalSub = document.formulario.vocalSubcadena.value;
	document.formulario.mensaje.value = contarOcurrencias(VstCadena, VstVocalSub);
}
function contarOcurrencias(VstCadena, VstVocalSub) {
	VstCadena = document.formulario.cadena.value.toLowerCase();
	VstVocalSub = document.formulario.vocalSubcadena.value.toLowerCase();

	let contador = 0;
	let indice = VstCadena.indexOf(VstVocalSub);

	while (indice !== -1) {
		contador++;
		indice = VstCadena.indexOf(VstVocalSub, indice + 1);
	}

  	return contador;
}