var numeros4 = [12, 25, 37, 40, 18, 55, 62, 71, 84, 91, 105, 120,
    33, 47, 52];
var multiplosTres = [];
var multiplosCinco = [];
var Resto = [];
var maior5 = 0;
var menor1 = 0;
var soma = 0;
var cont5 = 0;
for (var _i = 0, numeros4_1 = numeros4; _i < numeros4_1.length; _i++) {
    var percorer = numeros4_1[_i];
    if (percorer % 3 == 0) {
        multiplosTres.push(percorer);
        if (percorer % 5 == 0)
            multiplosCinco.push(percorer);
    }
    else if (percorer % 5 == 0) {
        multiplosCinco.push(percorer);
    }
    else {
        Resto.push(percorer);
    }
    cont5++;
    soma = +percorer;
    if (maior5 < percorer) {
        maior = percorer;
    }
    if (menor1 < percorer) {
        menor1 = percorer;
    }
}
console.log(multiplosTres);
console.log(multiplosCinco);
console.log(Resto);
console.log("O maior numero he " + maior5);
console.log("O menor numero he " + menor1);
console.log("O media entre os numero he : ", soma / cont5);
