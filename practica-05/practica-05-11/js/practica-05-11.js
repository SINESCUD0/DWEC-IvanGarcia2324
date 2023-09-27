window.onload = inicio;

/*

LA LOCALIDAD TIENE QUE CUMPLIR LAS SIGUIENTES CARACTERISTICAS:

- Va a empezar por 3 letras.
- A continuación va a contener letras o espacios.
- Y va a terminar por dos letras.
- Tiene que estar comprendido el número de carácteres entre 7 y 35.

*/

function inicio() {
    document.formulario.boton.onclick = comprobar;
}

function comprobar() {
    let VstLocalidad = document.formulario.localidad.value;
    var validacion = /^[a-záéíóúüñ]{3}[a-záéíóúüñ\s]{2,30}[a-záéíóúüñ]{2}$/i;
    if(validacion.test(VstLocalidad)){
        document.formulario.mensaje.value = "Validación correcta";
    }else{
        document.formulario.mensaje.value = "Validación incorrecta";
    }
}