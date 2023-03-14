// Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.

var cadena = prompt("Ingresa una cadena de texto:");


var resultado = "";

for (var i = 0; i < cadena.length; i++) {
  resultado += cadena.charAt(i);
  if (i !== cadena.length - 1) {
    resultado += "-";
  }
}

console.log(resultado);
