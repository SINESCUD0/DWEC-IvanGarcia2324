window.onload=inicio;
function inicio(){
	document.formulario.boton.onclick=calcular;
}

function calcular(){
	let VstDecimal = parseInt(document.formulario.decimal.value,10);
    let VstBinario = VstDecimal.toString(2);
    let VstOctal = VstDecimal.toString(8);
    let VstHexadecimal = VstDecimal.toString(16);
	document.formulario.binario.value=VstBinario;
	document.formulario.octal.value=VstOctal;
	document.formulario.hexadecimal.value=VstHexadecimal;
}