let listaMista: (number | string) [] = [1, "Maçã", 2, "Banana", 3, "Laranja"]

let numeros: number[] = [] // inicia o array vazio 
let frutas :string[] = [] // inicia o array vazio
for (let separador of listaMista) 
        if(typeof separador == "number"){ //compara o o tipo da variavel separador que pega um valor do array "Listamista" e compara para saber se ele é um number-, se ele forum number ele atribui o valor no array chamado numeros
            numeros.push(separador) //o "push" serve para adicionar o valor no ultima posição do array assim començando a lista dentro do array
        } else {
            frutas.push(separador) //o "push" serve para adicionar o valor no ultima posição do array assim començando a lista dentro do array
        }

console.log(numeros)
console.log(frutas)