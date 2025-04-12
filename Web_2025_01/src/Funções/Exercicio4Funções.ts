type Funcionario = {
    nome : string ;
    cargo : string ;
};

const funcionarios : Funcionario [] = [
    { nome : " Marcos ", cargo : " Desenvolvedor " } ,
    { nome : " Fernanda ", cargo : " Gerente " } ,
    { nome : " Carlos ", cargo : " Desenvolvedor " } ,
    { nome : " Joana ", cargo : " Analista " }
];
    
const cargoDesejado : string = " Desenvolvedor ";
    
let funcaoCargo = funcionarios.filter( funcionarios => funcionarios.cargo == cargoDesejado)

console.log(funcaoCargo)