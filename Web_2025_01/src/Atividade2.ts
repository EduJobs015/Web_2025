let nomes: string[] = ["Carlos", "Ana", "Pedro", "Mariana"]

nomes.push("João")              //Adicionar joão para o final da lista
nomes.unshift("Batriz")         //Adicionar Beatriz no começo da lista

let posicaoJoao: number = nomes.indexOf("João") //Defino uma variavel para armazenar a posição de joão, passso para o indexOf a parametro de joão, entao ele varre o array atras do parametro e assim que encontra ele me manda a posição do "joão" no Array, que no caso seria o numero 5 pois adicionei ele na ultima posição usando o push 
nomes.splice(posicaoJoao,posicaoJoao) // o metodo splice tenta remover os elemestos passados como parametros, o primerio posicaoJoao passa a posição do primeiro argumento a ser removido, já o segundo define quantos elementos vou retirar,o segundo argumento é a quantidade que vou tirar de elementos do array, então passei 1 pois quero tirar só 1 que é o primeiro "João" 
console.log(posicaoJoao) //posição que o joão foi encontrado 
console.log(nomes) //todos os nomesdo array sem o joão pois removemos ele 