var produtos = ["Arroz", "Feijão", "Leite", "Pão"];
console.log(produtos);
var posição_5 = produtos.indexOf("Leite");
var cont2 = 0;
produtos[2] = "Queijo";
for (var _i = 0, produtos_1 = produtos; _i < produtos_1.length; _i++) {
    var forProdutos = produtos_1[_i];
    cont2++;
}
produtos.shift();
produtos.push("Cafe");
console.log("Aposição do item Leite : ", posição_5);
console.log("O numero de elementos he de : ", cont2);
console.log(produtos);
