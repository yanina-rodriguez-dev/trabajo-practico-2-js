//Realiza un script que cuente el número de vocales que tiene un texto.

// let frase = prompt('Ingrese una frase sin acentos');

// console.log(frase.toLocaleLowerCase());

// frase = frase.toLocaleLowerCase();

// console.log(frase.length);

// for (if(frase.charAt(0) === 'a'|| frase.charAt(0) === 'e' || frase.charAt(0) === 'i' || frase.charAt(0) === 'o' || frase.charAt(0) === 'u')){
//     document.write(frase.charAt(0))
// }
// document.write(frase.charAt(0)++)
// const texto = prompt("Ingresa un texto");
// const longitud = texto.length;

// console.log(`El texto "${texto}" tiene una longitud de ${longitud} caracteres.`);
// let vocales = prompt('Ingrese una frase');

//  vocales=0;

// for(let i=0; i<tamaño;i++) {
// if(frase.charAt(i)=="a"){
// vocales++
// }
// if(frase.charAt(i)=="e"){
// vocales++
// }
// if(frase.charAt(i)=="i"){
// vocales++
// }
// if(frase.charAt(i)=="o"){
//  vocales++
// }
// if(frase.charAt(i)=="u"){
// vocales++
// }
// document.write('hay' + vocales + 'en la frase')
// }
let frase = prompt('Ingrese una frase');

let vocales=0;

for(let i=0; i<frase.length;i++) {
if(frase.charAt(i)=="a"){
vocales++
}
if(frase.charAt(i)=="e"){
vocales++
}
if(frase.charAt(i)=="i"){
vocales++
}
if(frase.charAt(i)=="o"){
 vocales++
}
if(frase.charAt(i)=="u"){
vocales++
}
}
document.write(' hay ' + vocales + ' en la frase')
