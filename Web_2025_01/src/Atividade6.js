var variado = [10, "Azul", 25, "Vermelho", 30, "Verde"];
var valoresNumericos = [];
var valoresTextuais = [];
for (var _i = 0, variado_1 = variado; _i < variado_1.length; _i++) {
    var valores = variado_1[_i];
    if (typeof valores == "number") {
        valoresNumericos.push(valores);
    }
    else {
        valoresTextuais.push(valores);
    }
}
console.log(valoresNumericos);
console.log(valoresTextuais);
