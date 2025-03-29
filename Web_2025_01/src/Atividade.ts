let idade : number[] = [10,15,20,8,17,25]

for (let num of idade ){ // estou usando um for para passar pelo array "idade" e ele usa o "of" para passar o valor de idade para num, entao cada vez que ele anda pelo array ele substitui o valor de "num" pelo valor que ele esta na posição 
    if (num < 12) { // e aqui ele faz as verificaçoes vendo o valor de num e parando aonde a condição se adequa.
        console.log(`${num} ainda he Criança`)
    }else if (num > 18){
        console.log(`${num} voce já é um Adolescente`)
    }else{
        console.log(`${num} voce já é um Adulto`)
    }
}