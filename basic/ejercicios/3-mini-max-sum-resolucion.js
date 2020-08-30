/*
### Problema
Dados 5 enteros positivos, encuentre el minimo y maximo valor que puede ser calculado por sumar exactamente 4 de los 5 enteros. Luego imprima respectivamente el minimo y maximo.

#### Ejemplo

> arr = [1,3,5,7,9]

La suma minima es 1 + 3 + 5 + 7 = 16

La suma maxima es 3 + 5 + 7 + 9 = 24


*/

const findMaxMin = (arr) => {
    arr.sort((a,b)=>a-b);
    var max = arr[4]+arr[3]+arr[2]+arr[1];
    var min = max-arr[4]+arr[0];
    console.log(`Max = ${max}, Min = ${min}`)
}

arr = [1,4,3,9,2];

findMaxMin(arr);