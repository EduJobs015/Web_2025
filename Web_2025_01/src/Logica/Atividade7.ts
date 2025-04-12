let numeros4: number[] = [12, 25, 37, 40, 18, 55, 62, 71, 84, 91, 105, 120,
    33, 47, 52]
let multiplosTres: number[] = []
let multiplosCinco: number[] = []
let Resto: number[] = []
var maior5: number = numeros4[0]
let menor1: number = numeros4[0]
let soma: number = 0
let cont5: number = 0
let anterior2: number = 0  // usar ela 


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
    cont5 ++
    soma += percorer

    if(maior5 < percorer){
        maior5 = percorer
    }
    if(menor1 > percorer){
        menor1 = percorer
    }
}

// Ordenação Decrescente
// Assim posso passar por cada numero do Array e comparar o indice i com o restante do array podendo trocar os lugares e assim ordenando o array comforme o pedido
for(let i = 0; i < multiplosTres.length; i ++){ // o primeiro for fica responsalvel por passar por cada item do array, um por vez enquanto o segundo for comparar a posição que ele esta com os demais numeros só depois da vereficação acabar ele anda para o proximo item.
    for(let j = i + 1; j <multiplosTres.length; j ++){ // enquanto o primeiro for esta parado com um indice esse for fica responsavel por comparar o indece com os demais indeces do array e caso precise faz oque a condição a seguir pede. 
        if (multiplosTres[i] < multiplosTres[j]){ // aqui ele compara se o indece i e menor que o j, 
            let temporario = multiplosTres[i] // aqui eu declarey uma variavewl local só para armazenar o numero de i para não perder o valor de multiploTres[i].
           multiplosTres[i] = multiplosTres[j] // se a condição de cima for verdade eu vou pegar o valor de j que é menor que o do i e vou colocar no lugar do i.
            multiplosTres[j] = temporario // e atribuo o valor de i no j, usando a variavel onde armazenei o valor de i, assim eu troco eles de lugar podendo ordenar em ordem crescente 
        }
    }
}

for(let i = 0; i < multiplosCinco.length; i ++){
    for(let j = i + 1; j < multiplosCinco.length; j ++){
        if(multiplosCinco[i] < multiplosCinco[j]){
            let temporario2 = multiplosCinco[i]
            multiplosCinco[i] = multiplosCinco[j]
            multiplosCinco[j] = temporario2
        }
    }
}


for(let i = 0; i < Resto.length; i ++){
    for(let j = i + 1; j < Resto.length; j ++){
        if(Resto[i] < Resto[j]){
            let temporario3 = Resto[i]
            Resto[i] = Resto[j]
            Resto[j] = temporario3
        }
    }
}



console.log(multiplosTres)
console.log(multiplosCinco)
console.log(Resto)

console.log(`O maior numero he ${maior5}`)
console.log(`O menor numero he ${menor1}`)
console.log("O media entre os numero he : ",soma / cont5)