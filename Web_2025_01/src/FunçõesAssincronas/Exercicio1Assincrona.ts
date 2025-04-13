type Tarefa ={
    descricao: string;
    prioridade: number;
    concluida: boolean;
}

const Tarefas : Tarefa [] = [
{ descricao : " Fazer relat ório", prioridade : 2, concluida : false } ,
{ descricao : " Enviar e- mail ", prioridade : 3 , concluida : false } ,
{ descricao : " Reuni ão com equipe ", prioridade : 1 , concluida : false }
]

function imprimirTarefa(descricao: string, indice : number,quantidade : number): void{
    console.log(`Tarefa concluida : ${descricao}`)

    console.log()
}

function executarTarefa(descricao: string, prioridade: number, concluida: boolean, callback : (descricao: string, indice : number,quantidade : number)): void{
    setInterval(() => console.log("Tarefa sendo processada ..."), 2000)

    concluida = true

    console.log(`Tarefa ${descricao} ${prioridade} ${concluida} está concluida !!!`)


    setTimeout(() => 1000)
}
