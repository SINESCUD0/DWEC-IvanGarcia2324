window.onload=inicio;
function inicio(){
	document.formulario.boton.onclick=calcular;
}

function calcular(){
	let VstCadena = document.formulario.cadena.value.toLowerCase();
	var aCont= 0; 
	var eCont= 0;
	var iCont= 0;
	var oCont= 0;
	var uCont= 0;
	var otrosCont = 0;
	for (var i = 0 ; i < VstCadena.length ; i++) {
		switch(VstCadena.charAt(i)) {
			case "a":
			case "á":
				aCont++;
				break;
			case "e":
			case "é":
				eCont++;
				break;
			case "i":
			case "í":
				iCont++;
				break;
			case "o":
			case "ó":
				oCont++;
				break;
			case "u":
			case "ü":
			case "ú":
				uCont++;
				break;
			default:
				otrosCont++;
				break;
		}
		var vocalesTotales = aCont+eCont+iCont+oCont+uCont;
		document.formulario.vocales.value=vocalesTotales;
		document.formulario.consonantes.value=otrosCont;
		document.formulario.a.value=aCont;
		document.formulario.e.value=eCont;
		document.formulario.i.value=iCont;
		document.formulario.o.value=oCont;
		document.formulario.u.value=uCont;
	}
    
}