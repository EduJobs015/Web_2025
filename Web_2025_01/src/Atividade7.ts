let numeros4: number[] = [12, 25, 37, 40, 18, 55, 62, 71, 84, 91, 105, 120,
    33, 47, 52]
let multiplosTres: number[] = []
let multiplosCinco: number[] = []
let Resto: number[] = []

for(let percorer of numeros4){
    if(percorer % 3 == 0){
        multiplosTres.push(percorer)
            if(percorer % 5 == 0 )
                multiplosCinco.push(percorer)
    }else if(percorer % 5 == 0){
        multiplosCinco.push(percorer)
    }else{
        Resto.push(percorer)
    }
}

multiplosTres.sort((a,b) => a - b)
multiplosCinco.sort((a,b) => a - b)
Resto.sort((a,b) => a - b)

console.log(multiplosTres)
console.log(multiplosCinco)
console.log(Resto)