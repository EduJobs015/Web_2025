
export class Produto {
    nome : string
    preco : number
        constructor (nome : string, preco :number) {
            this . nome = nome
            this . preco = preco
        }
        mostrarInformacoes (): void {
            console.log(`O produto é um(a) : ${this.nome}`)
            console.log(`O preço do produto é de : ${this.preco}`)
        }
}
    // uso da classe
const prod = new Produto (" Notebook ", 3500)
prod.mostrarInformacoes()