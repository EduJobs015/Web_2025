class DateUtils {
    Data :Date 
    Formato :string


    constructor(Data : Date, Formato :string){
        this.Data = Data
        this.Formato = Formato
    }


    static formatarData(Data :Date, Formato :string) : string{
        const Dia : number = Data.getDate() // getDate é usado para pegar o dia de uma data fornecida 
        const Mes : number = Data.getMonth() // getMonth é usado para pegar o mes de uma data fornecida 
        const ano : number = Data.getFullYear() // getFullYear é usado para pegar o ano de uma data fornecida


        switch(Formato){
            case "yyyy/mm/dd" :
                return `${ano}/${Mes}/${Dia}`
            break

            case "dd/mm/yyyy" :
                return `${Dia}/${Mes}/${ano}`
                break
            default:
                return Data.toDateString() // Data no formato padrao 

        }
    }
    // Math é um objeto integrado que fornece funções matemáticas úteis e constantes
    //abs retorna o valor absoluto de um número, ou seja, remove o sinal negativo 
    static diferencaEmDias(Data :Date, Data2 :Date): number{
        const subitracaoData = Math.abs(Data.getTime() - Data2.getTime()) // O getTime tranforma o numero em milissegundos 
        const diaSegundos = 1000 * 60 * 60 * 24 // aqui estou somando quantos milissenguntos tem um dia para poder dividir e encontrar a diferenca de dias atravez dos segundos 

        return Math.floor(subitracaoData / diaSegundos) // floor aredonda um float para menor Ex: 4,9 == 4 
    }

    static adicionarDias(Data :Date, Add : number) : Date{
        const dataAdd = new Date(Data) // aqui estou clonado a data para não afetar a variavel "global"
        dataAdd.setDate(dataAdd.getDate() + Add) // setDate é usado para definir um dia, podendo fazer alterações como no exercicio // O getDate retorna um dia de 1 a 31 da data que foi fornecido
            return dataAdd
    }


    static ehFinalDeSemana(Data : Date) :boolean{
        const dataAtual = new Date(Data)
        const finalDeSemana : number = dataAtual.getDay() // (getDay) Aqui ele pega a semana e sempara de 0 sendo domingo e assim a diante até chegar no dia 6 que é sabado, e ele esta atribuindo a finalDeSemana o dia exato que estamos e assim posso fazer a comparação  
        if(finalDeSemana === 0 || finalDeSemana === 6)
            return true
        else 
            return false
    }


    static converterParaISO(Data: Date): string{
        const dataIso : string = Data.toISOString()
            return dataIso
    }

    static calcularIdade(dataNascimento: string): number{
        const anoNascimento : number =  Number(dataNascimento.slice(0,4)) // aqui eu declaro que mesmo recebendo uma string vou passar ela como Number e só vou pegar os 4 primeiros caracteres da string e passar como number 
        const anoComparado = new Date(hoje).getFullYear() // aqui pego só o ano da data que vou fazer a comparação
            return anoComparado - anoNascimento
    }

}

const hoje = new Date () ;

console.log(DateUtils.formatarData(hoje,"dd/mm/yyyy"))
console.log(DateUtils.diferencaEmDias(new Date ("2025-05-01"),hoje))
console.log(DateUtils.adicionarDias(hoje,10))
console.log(DateUtils.ehFinalDeSemana(hoje))
console.log(DateUtils.converterParaISO(hoje))
console.log(DateUtils.calcularIdade("2005/02/28"))


