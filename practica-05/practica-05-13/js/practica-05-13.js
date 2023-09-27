window.onload = inicio;

/*

EL TEXTO QUE SE INTRODUZCA TIENE QUE LEERSE IGUAL QUE DERECHA
A IZQUIERDA Y AL REVES SIN IMPORTAR LOS ESPACIOS.

*/

function inicio() {
    document.formulario.boton.onclick = comprobar;
}

function comprobar() {
    let VstPalindromo = document.formulario.palindromo.value;
    let resultado = VstPalindromo.replace(/ /g, "").toLowerCase();
    if(resultado == reves(resultado)){
        document.formulario.mensaje.value = "Es palindromo";
    }else{
        document.formulario.mensaje.value = "No es palindromo";
    }
}

function reves(str) {
  let arrStr = str.split("");

  return arrStr.reverse().join("");
}