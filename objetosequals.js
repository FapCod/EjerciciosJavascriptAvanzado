/*
 Comparar dos objetos para ver si son iguales
 usando javascript.
 */
function isEquals(obj1,obj2){
    if(Array.isArray(obj1) && Array.isArray(obj2)){
        for(let i =0; i <= obj1.length; i++){
            if(!isEquals(obj1[i], obj2[i])){
                return false;
            }
        }
        return true;
    }

    if(typeof obj1 === 'object' && typeof obj2 === 'object'){
        const keys = Object.keys(obj1);
        for(const key of keys){
            if(!isEquals(obj1[key], obj2[key])){
                return false;
            }
        }
        return true;
    }

    return obj1 === obj2;
}
// Todos los console logs deben retornar true:
console.log(isEquals(2, 2));
console.log(isEquals([1, 2, 3], [1, 2, 3]));
console.log(isEquals({ a: 1, b: 2 }, { a: 1, b: 2 }));
console.log(isEquals([{ a: 1, b: 2 }], [{ a: 1, b: 2 }]));
console.log(isEquals([{ a: [100, 200], b: 2 }], [{ a: [100, 200], b: 2 }]));
console.log(isEquals([{ a: [100, 200], b: { x: 'ABC' } }], [{ a: [100, 200], b: { x: 'ABC' } }]));