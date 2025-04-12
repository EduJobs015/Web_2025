type Evento = {
    nome : string ;
    mes : string ;
};

const eventos : Evento [] = [
    { nome : " Workshop TypeScript ", mes : "Janeiro" } ,
    { nome : " Hackathon ", mes : " Março" } ,
    { nome : " Confer ê ncia de IA", mes : "Janeiro" }
];


const filtroMes = eventos.filter(eventos => eventos.mes == "Janeiro")

console.log(filtroMes)