/* Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”.
 Al salir con “cancelar” deben mostrarse todas las
  cadenas concatenadas con un guión -.
*/

let cadenas = '';
let consultaUno = confirm('ingrese una cadena de texto o presione cancelar para salir');
let consultaDos = '';


while (consultaUno) {
consultaDos = prompt('Ingrese el texto');
    
    if(consultaDos === '' || consultaDos === null){
alert('No ingreso ningun texto') 
}
 cadenas = cadenas + consultaDos + ' - '
 consultaUno = confirm('Click en aceptar para ingresar otro texto o click en cancelar para mostrar texto concatenado')
if(!consultaUno){
    alert(cadenas)

}
} 




// while{
//   let cadena = prompt('Ingrese una cadena de texto (o presione "cancelar" para salir)');
//   if(cadena === null) {
//     break; // Salir del bucle si se presiona "cancelar"
//   }
//   cadenas += cadena + '-'; // Concatenar la cadena con un guión
// }

// alert(cadenas);
