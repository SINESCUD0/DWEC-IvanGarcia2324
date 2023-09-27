window.onload=inicio;
function inicio(){
	let VstResultado = "";
	for(let indice = 0; indice < 100; indice++){
		if(numeroPrimo(indice)){
			VstResultado += indice.toString() + "|";
		}
	}
	document.formulario.caja.value=VstResultado;
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