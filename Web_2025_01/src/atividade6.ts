let variado: (number | string)[] = [10, "Azul", 25, "Vermelho", 30, "Verde"]
let valoresNumericos: number[] = []
let valoresTextuais: string[] = []

for(let valores of variado){
    if(typeof valores == "number"){
        valoresNumericos.push(valores)
    }else{
        valoresTextuais.push(valores)
    }
}

console.log(valoresNumericos)
console.log(valoresTextuais)
