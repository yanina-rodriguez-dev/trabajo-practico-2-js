let texto = prompt('Introduce un texto:');
let vocales = ['a', 'e', 'i', 'o', 'u'];
let posicion = -1;

for (let i = 0; i < texto.length; i++) {
  let letra = texto.charAt(i).toLowerCase();
  if (vocales.includes(letra)) {
         posicion = i + 1;
            break;
  }
}


if (posicion === -1) {
  alert('El texto no contiene ninguna vocal');
}

else {
  alert('La primera vocal esta en la posición ' + posicion);
}
