/*
 Escribir una funcion que aumente un contador
 en 1 cada vez que se llame a la funcion
 */

function GetContador(valor){
    return () => valor += 1;
}

const contador = GetContador(1);
console.log(contador());
console.log(contador());
console.log(contador());
console.log(contador());
console.log(contador());