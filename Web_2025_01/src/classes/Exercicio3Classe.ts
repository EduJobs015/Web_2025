class Carro{
    marca :string 
    modelo :string
    ano :number


    constructor(marca :string, modelo :string, ano :number){
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
    }

    mostrarCarro() :void{
        console.log(`A marca do carro é ${this.marca}`)
        console.log(`O modelo do carro é ${this.modelo}`)
        console.log(`O ano do carro é ${this.ano}`)
    }
}

const NovoCarro1 = new Carro("Honda", "civic Type R", 2025)

NovoCarro1.mostrarCarro()

NovoCarro1.ano = 2024

NovoCarro1.mostrarCarro()