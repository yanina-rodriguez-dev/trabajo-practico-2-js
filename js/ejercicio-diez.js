/* Realiza un script que pida número de filas y columnas y escriba una tabla.
 Dentro de cada una de las celdas deberá escribirse un número consecutivo en 
 orden descendente. Si, por ejemplo, 
 la tabla es de 7×5 los números irán del 35 al 1.
*/

let filas = prompt('Ingrese el número de filas');
let columnas = prompt('Ingresar el número de columnas')
let celdas = "";
console.log(filas)


document.write('<table><tbody>')
//bucle variable indice finals lo inicializo en 0 °° mientras indice filas sea menor que filas; incremento indice filas en 1
for(let indiceFilas=0; indiceFilas < filas; indiceFilas++){
    document.write('<tr>')
        //celdas
       for( let indiceColumnas=0; indiceColumnas < columnas; indiceColumnas++){
        document.write('<td>')
         for(let contenidoCeldas=1; contenidoCeldas <celdas; contenidoCeldas--){
            document.write(celdas)
         }
        document.write('</td>')
        }
    document.write('</tr>')
}
document.write('</tbody></table>');

