let produtos: string [] = ["Arroz", "Feijão", "Leite", "Pão"]

console.log(produtos)

let posição_5 : number = produtos.indexOf("Leite")
let cont2 = 0


produtos[2] = "Queijo"


for(let forProdutos of produtos){
    cont2++
}
produtos.shift()
produtos.push("Cafe")
console.log("Aposição do item Leite : ",posição_5)
console.log("O numero de elementos he de : ",cont2)
console.log(produtos)
