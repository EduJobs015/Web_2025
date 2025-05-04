class Usuario{
    nome : string
    email : string


    constructor(nome :string, email :string){
        this.nome = nome 
        this.email = email
    }

    boasVindas(): void{
        console.log(`Bem-Vindo ${this.nome} !`)
        console.log(`Seu email é : ${this.email}`)
    }
}   


const NovoUsuario1 = new Usuario("Eduardo","edualbuq8@gmail.com")

NovoUsuario1.boasVindas()