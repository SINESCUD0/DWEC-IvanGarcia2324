window.onload = inicio;

/*

EL CODIGO TIENE QUE CUMPLIR LAS SIGUIENTES CARACTERISTICAS:

- Va a empezar entre 3 y 6 dígitos.
- Va a tener 2 letras que pueden ser "AN", "ES", "DL" o "US".
- Continua con el carácter # o bien @ o bien $ o &.
- Sigue entre 4 y 7 letras.
- Continua con 2 dígitos.
- Sigue con 3 letras.
- Termina con 5 carácteres que pueden ser letras, dígitos o los
  caracteres % o / o ? o !.
- Va a tener una longitud entre 20 y 26 caracteres.

*/

function inicio() {
    document.formulario.boton.onclick = comprobar;
}

function comprobar() {
    let VstCodigo = document.formulario.codigo.value;
    var validacion = /^[0-9]{3,6}(AN|ES|DL|US)[@#$&][a-záéíóúüñ]{4,7}[0-9]{2}[a-záéíóúüñ]{3}[a-záéíóúüñ0-9%\/\?!]{5}$/i;
    if(validacion.test(VstCodigo)){
        document.formulario.mensaje.value = "Validación correcta";
    }else{
        document.formulario.mensaje.value = "Validación incorrecta";
    }
}