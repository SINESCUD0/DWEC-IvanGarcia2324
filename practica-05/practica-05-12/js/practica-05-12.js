window.onload = inicio;

/*

LA DIRECCION TIENE QUE CUMPLIR LAS SIGUIENTES CARACTERISTICAS:

- Empieza por una letra.
- En medio va a poder tener letras,dígitos y los caracteres º ª / -.
- Va a terminar por una letra o un dígito.
- Entre 8 y 42 caracteres.

*/

function inicio() {
    document.formulario.boton.onclick = comprobar;
}

function comprobar() {
    let VstDireccion = document.formulario.direccion.value;
    var validacion = /^[a-záéíóúüñ][a-záéíóúñªº, 0-9\-]{6,40}[a-záéíóúñ | 0-9]$/i;
    if(validacion.test(VstDireccion)){
        document.formulario.mensaje.value = "Validación correcta";
    }else{
        document.formulario.mensaje.value = "Validación incorrecta";
    }
}