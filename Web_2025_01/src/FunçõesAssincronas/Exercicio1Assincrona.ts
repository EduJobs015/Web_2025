type Tarefa ={
    descricao: string;
    prioridade: number;
    concluida: boolean;
}

const Tarefas : Tarefa [] = [
{ descricao : " Fazer relatório", prioridade : 2, concluida : false } ,
{ descricao : " Enviar e-mail ", prioridade : 3 , concluida : false } ,
{ descricao : " Reunião com a equipe ", prioridade : 1 , concluida : false }
]

function imprimirTarefa(descricao: string, indice : number,totalTarefas : number): void{
    console.log(`Tarefa concluida : ${descricao}`)
    console.log(`Progresso: ${indice + 1} / ${totalTarefas}`)

}
Tarefas.sort((a:Tarefa, b :Tarefa) => a.prioridade - b.prioridade)

function executarTarefa(tarefas : Tarefa[],  callback : (descricao: string, indice : number, quantidade : number) => void, intervalo:number ): void{

        for (let i = 0; i < tarefas.length; i ++){
            let timeout = setInterval(() => {
                console.log(`Execurtando a tarefa ${Tarefas[i].prioridade}...`)
            }, intervalo)
            if(Tarefas[i].descricao == "Cancelar"){
                clearInterval(timeout)
            }else{
                Tarefas[i].concluida = true
                console.log(Tarefas[i])
            callback(Tarefas[i].descricao, i, 3)
            }
            clearInterval(timeout)
        }
}

executarTarefa(Tarefas,imprimirTarefa, 1500)