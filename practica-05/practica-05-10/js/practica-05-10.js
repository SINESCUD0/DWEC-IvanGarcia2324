window.onload = inicio;

/*

LA URL TIENE QUE CUMPLIR LAS SIGUIENTES CARACTERISTICAS:

- Tener al inicio http:// o https:// o bien no tenerlos.
- Tener "www.".
- A continuación va a tener una subcadena que va a empezar
  con letra y a continuación va a tener letras o dígitos o un -
  y va a terminar por letra o dígito.
- A continuación va a tener un punto.
- Va a terminar con letras en un número comprendido entre 2 y 4.

*/

function inicio() {
    document.formulario.boton.onclick = comprobar;
}

function comprobar() {
    let VstURL = document.formulario.url.value;
    var validacion = /^(https?:\/\/)?(www\.)[a-záéíóúüñ][a-záéíóúüñ0-9\-]*[a-záéíóúüñ0-9]\.[a-záéíóúüñ]{2,4}$/i;
    if(validacion.test(VstURL)){
        document.formulario.mensaje.value = "Validación correcta";
    }else{
        document.formulario.mensaje.value = "Validación incorrecta";
    }
}