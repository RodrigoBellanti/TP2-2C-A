/*
### Considere una escalera de tamaño n = 6
     
>
>       #
>      ##
>     ###
>    ####
>   #####
>
*/

const buildStaircase = (n) => {
    for(i=1;i<=n;i++){
        console.log("#".repeat(i))
    }
}
buildStaircase(6);


