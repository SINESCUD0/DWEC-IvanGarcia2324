window.onload=inicio;
function inicio(){
	document.formulario.boton.onclick=calcular;
}

function numeroPrimo(numero){
	let VboPrimo = true;
	if(numero <= 1){
		VboPrimo = false;
	}
	for(let i = 2; i < numero; i++){
		if(numero % i == 0){
			VboPrimo = false;
		}
	}
	return VboPrimo;
}

function calcular(){
	let VstResultado = "";
	let VstInicio = parseInt(document.formulario.inicial.value,10);
	let VstFinal = parseInt(document.formulario.final.value,10);
	for(let indice = VstInicio; indice <= VstFinal; indice++){
		if(numeroPrimo(indice)){
			VstResultado += indice.toString() + "|";
		}
	}
	document.formulario.caja.value=VstResultado;
}