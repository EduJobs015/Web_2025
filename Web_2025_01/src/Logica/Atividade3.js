var listaMista = [1, "Maçã", 2, "Banana", 3, "Laranja"];
var numeros = []; // inicia o array vazio 
var frutas = []; // inicia o array vazio
for (var _i = 0, listaMista_1 = listaMista; _i < listaMista_1.length; _i++) {
    var separador = listaMista_1[_i];
    if (typeof separador == "number") { //compara o o tipo da variavel separador que pega um valor do array "Listamista" e compara para saber se ele é um number-, se ele forum number ele atribui o valor no array chamado numeros
        numeros.push(separador); //o "push" serve para adicionar o valor no ultima posição do array assim començando a lista dentro do array
    }
    else {
        frutas.push(separador); //o "push" serve para adicionar o valor no ultima posição do array assim començando a lista dentro do array
    }
}
console.log(numeros);
console.log(frutas);
