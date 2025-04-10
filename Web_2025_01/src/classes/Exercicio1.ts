class Livro{
    titulo : string
    autor : string
    anoPublicado : number
    editora : string


    constructor(titulo : string, autor: string, anoPublicado: number, editora: string){
        this.titulo = titulo
        this.autor = autor
        this.anoPublicado = anoPublicado
        this.editora = editora
    }

    imprimirDados(): void {
        console.log(`   Titulo do Livro : ${this.titulo}
            Nome do auto : ${this.autor}
            Ano que foi Publicado : ${this.anoPublicado}
            Editora que foi publicado : ${this.editora}`)
    }
}

const Livro1 = new Livro("Meu pé de laranja lima", "Eduardo", 2021, "New end Boys da argentina")

Livro1.imprimirDados()