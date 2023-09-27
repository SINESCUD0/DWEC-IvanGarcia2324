window.onload = inicio;

/*

EL EMAIL TIENE QUE CUMPLIR LAS SIGUIENTES CARACTERISTICAS:

- Empezar por una letra.
- A continuación va a tener letras, digitos,
  guión o punto en un numero indeterminado de caracteres.
- Le va a seguir una letra o un dígito.
- A continuación va a tener el signo @.
- Una letra. 
- A continuación una subcadena con dígitos, letras o guión.
- Le sigue una letra o un dígito.
- A continuación un punto.
- Por último va a terminar con entre dos y cuatro letras.

*/

function inicio() {
    document.formulario.boton.onclick = comprobar;
}

function comprobar() {
    let VstEmail = document.formulario.email.value;
    var validacion = /^[a-záéíóúüñ][a-záéíóúüñ0-9\.\-]*[a-záéíóúüñ0-9]@[a-záéíóúüñ][a-záéíóúüñ0-9\-]*[a-záéíóúüñ | 0-9]\.[a-záéíóúüñ]{2,4}$/i;
    if(validacion.test(VstEmail)){
        document.formulario.mensaje.value = "Validación correcta";
    }else{
        document.formulario.mensaje.value = "Validación incorrecta";
    }
}