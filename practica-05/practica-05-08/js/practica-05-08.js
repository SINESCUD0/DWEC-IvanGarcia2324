window.onload = inicio;

function inicio() {
    document.formulario.boton.onclick = comprobar;
}

function comprobar() {
    let VstFecha = document.formulario.fecha.value;
    var fecha = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    var match = VstFecha.match(fecha);
    let VboFecha = true;
    if (!match) {
        VboFecha = false;
    } else {
        var dia = parseInt(match[1], 10);
        var mes = parseInt(match[2], 10);
        var ano = parseInt(match[3], 10);
        if (mes === 2) {
            if ((dia > 29 && !esBisiestro(ano)) || dia > 29) {
                VboFecha = false;
            }
        } else if ((mes === 4 || mes === 6 || mes === 9 || mes === 11) && dia > 30) {
            VboFecha = false;
        } else if (dia > 31) {
            VboFecha = false;
        }
    }

    if (!VboFecha) {
        document.formulario.mensaje.value = "Validación incorrecta";
    } else {
        document.formulario.mensaje.value = "Validación correcta";
    }
}

function esBisiestro(ano) {
    return (ano % 4 == 0 && ano % 100 != 0) || (ano % 400 == 0);
}
