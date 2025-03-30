let numeros1: number[] =  [12, 25, 37, 40, 18, 55, 62, 71, 84, 91]
let impar: number[] = []
let par: number[] = []
let armazenar: number = 0
let cont: number = 0 
let maior: number = 0
let menor: number = numeros1[0]

for(let imparPar of numeros1){
    if(imparPar % 2 == 1){
        impar.push(imparPar)
    }else{
        par.push(imparPar)
        }

    armazenar +=imparPar
    cont ++

    if(maior < imparPar){
        maior = imparPar
    }
    if(menor > imparPar){
        menor = imparPar
    }
}

impar.sort((a, b) => a - b) // Ordena os ímpares de forma crescente
par.sort((a, b) => a - b) 

console.log('Todos os valores impares : ',impar)
console.log('Todos os valores pares :',par)
console.log('O valor de todos os numeros somados he de :',armazenar)
console.log(`A media de ${numeros1} he de : ${armazenar / cont}`)
console.log(`O maior numero he : ${maior} e o menor numero he : ${menor}`)

