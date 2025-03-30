let numeros1: number[] =  [12, 25, 37, 40, 18, 55, 62, 71, 84, 91]
let impar: number[] = []
let par: number[] = []
let armazenar: number = 0

for(let imparPar of numeros1){
    if(imparPar % 2 == 1){
        if(imparPar <= armazenar){
            impar.unshift(imparPar)
        }else{
            impar.push(imparPar)
        }
    }else{
        if(imparPar <= armazenar){
            par.unshift(imparPar)
        }else{
            par.push(imparPar)
        }
    }
        armazenar = imparPar
}

console.log(impar)
console.log(par)

