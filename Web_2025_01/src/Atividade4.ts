let numeros1: number[] = [45, 29, 33, 10, 22, 50, 67, 88, 79, 74]
let impar: number[] = []
let par: number[] = []
let armazenar: number = numeros1 [0]

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

