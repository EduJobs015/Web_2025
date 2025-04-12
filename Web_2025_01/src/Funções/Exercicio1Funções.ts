function Maiuscula(string : string): string{
    let Maiuscula1 = string.toLocaleLowerCase()
    return Maiuscula1
}

let strings = "HELLO"

console.log(Maiuscula(strings))