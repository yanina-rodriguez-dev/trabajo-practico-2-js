//Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir,
// si la edad ingresada no es un número válido indicarlo en un mensaje.

let edad= parseInt(prompt('Ingrese su edad'));
// si la edad es mayor a 18 y si es menor o igual a 93 hacer...
if(edad > 18  && edad <= 70){
    //mostrar un mensaje que diga Usted no puede conducir
    document.write('Usted SI puede conducir')
}
else if(edad < 18 && edad > 0){
 document.write('Usted es menor de edad por lo tanto NO puede conducir')
 }  
 else if(edad = 0 || edad > 120){
 document.write('Usted ha ingresado un numero invalido')
 } 
 else if(edad > 70 && edad < 130){
 document.write('Usted puede conducir bajo su responsabilidad acreditando de forma anual su aptitud para esto. Se recomienda seguir estas indicaciones para preservar su seguridad')
}
