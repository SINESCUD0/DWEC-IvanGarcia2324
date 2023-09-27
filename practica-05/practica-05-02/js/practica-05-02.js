window.onload=inicio;
function inicio(){
	let VstResultado = "";
	let contador = 0;
	let indice = 0;
	while(contador!=100){
		if(numeroPrimo(indice)){
			VstResultado += indice.toString() + "|";
			contador++;
		}
		indice++;
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