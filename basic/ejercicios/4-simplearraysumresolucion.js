/*
### Suma de array simple
Considere un array de enteros, encontrar la suma de los elementos. 

Por ejemplo si el array ar = [1,2,3] 
1 + 2 + 3 = 6 

retorna 6.
*/

var arr = [1,2,3,4];

const sumarArray = (arr) => {
    let total = 0;
    arr.forEach(i => {
        total += i
    });
    return total;
}

console.log(sumarArray(arr))