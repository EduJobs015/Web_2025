
let notas : number[] = [5,5,5,5,5]


function calcularMedia (notas : number []) : number{
    try{
        if(!notas){
            throw new Error("Não á notas para fazer a media") 
        }
        let soma = 0;
    for (let i = 0; i < notas.length ;i++)
        soma += notas[i];

    return soma / notas.length ;
    }catch(error){
        console.error("Erro: " , (error as Error).message)

        return 0
    }
}

console.log(calcularMedia(notas))