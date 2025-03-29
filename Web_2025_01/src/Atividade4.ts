let numeros1: number[] = [12, 25, 37, 40, 18, 55, 62, 71, 84, 91]
let impar: number[] = []
let par: number[] = []
let anterior: number | undefined
for(let imparPar of numeros1){
    if(imparPar % 2 === 1){
        if(imparPar >= anterior){
            impar.unshift(imparPar)
        }else{
            impar.push(imparPar)
        }
    }else{
        if(imparPar >= anterior){
            par.unshift(imparPar)
        }else{
            par.push(imparPar)
        }
    }
    anterior = imparPar
}

console.log(impar)
console.log(par)

