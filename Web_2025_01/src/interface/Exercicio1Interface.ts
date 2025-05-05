class DateUtils {
    Data :Date 
    Formato :string


    constructor(Data : Date, Formato :string){
        this.Data = Data
        this.Formato = Formato
    }


    static formatarData(Data :Date, Formato :string) : string{
        const Dia : number = (Data.getDate()) // getDate é usado para pegar o dia de uma data fornecida 
        const Mes : number = (Data.getMonth()) // getMonth é usado para pegar o mes de uma data fornecida 
        const ano : number = (Data.getFullYear()) // getFullYear é usado para pegar o ano de uma data fornecida


        switch(Formato){
            case "yyyy/mm/dd" :
                return `0${ano}/0${Mes}/${Dia}`
            break

            case "dd/mm/yyyy" :
                return `0${Dia}/0${Mes}/${ano}`
                break
            default:
                return Data.toDateString() // Data no formato padrao 

        }
    }
    // Math é um objeto integrado que fornece funções matemáticas úteis e constantes
    //abs retorna o valor absoluto de um número, ou seja, remove o sinal negativo 
    static diferencaEmDias(Data1 :Date, Data2 :Date): number{
        const subitracaoData = Math.abs(Data1.getTime() - Data2.getTime()) // O getTime tranforma o numero em milissegundos 
        const diaSegundos = 1000 * 60 * 60 * 24 

        return Math.floor(subitracaoData / diaSegundos) // floor aredonda um float para menor Ex: 4,9 == 4 
    }
}

const hoje = new Date () ;

console.log(DateUtils.formatarData(hoje,"dd/mm/yyyy"))
console.log( DateUtils.diferencaEmDias(new Date ("2025-05-01"),hoje))

