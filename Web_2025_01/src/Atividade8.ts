const string : string[] = ["Arroz", "Feijão", "Leite", "Pão", "Açúcar",
    "Café", "Óleo"]

let posicaoLeite: number = string.indexOf("Leite")

string[posicaoLeite] = "Queijo" 

console.log(string)
let retirar1 : number = 0

for(let i = retirar1; i < string.length -1; i ++){ // o length me mostra o tamnho do array ai eu estou fazendo com que ele percorra o array diminuindo o array e assim que ele passa por um item ele sobreescreve o item futuro em cima do item que ele esta assim ele mata um dos numeros so array, e como eu queria matar o primeiro item eu passei para ele comecar no item 0 que é o primero item do array. 
    string[i] = string[i + 1]

    console.log(string[i])
}
string.length = 7 
string [7]= "Farinha"

console.log(string)

