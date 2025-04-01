let numeros4: number[] = [12, 25, 37, 40, 18, 55, 62, 71, 84, 91, 105, 120,
    33, 47, 52]
let multiplosTres: number[] = []
let multiplosCinco: number[] = []
let Resto: number[] = []
let maior1: number = 0
let menor1: number = 0
let soma: number = 0
let con2: number = 0




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
    cont2 ++
    soma =+ percorer

    if(maior1 < percorer){
        maior = percorer
    }
    if(menor1 < percorer){
        menor1 = percorer
    }
}

console.log(multiplosTres)
console.log(multiplosCinco)
console.log(Resto)

console.log(`O maior numero he ${maior1}`)
console.log(`O menor numero he ${menor1}`)
console.log("O media entre os numero he : ",soma / cont2)