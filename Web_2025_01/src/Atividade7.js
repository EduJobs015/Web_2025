var numeros4 = [12, 25, 37, 40, 18, 55, 62, 71, 84, 91, 105, 120,
    33, 47, 52];
var multiplosTres = [];
var multiplosCinco = [];
var Resto = [];
for (var _i = 0, numeros4_1 = numeros4; _i < numeros4_1.length; _i++) {
    var percorer = numeros4_1[_i];
    if (percorer % 3 == 0) {
        multiplosTres.push(percorer);
    }
    else if (percorer % 5 == 0) {
        multiplosCinco.push(percorer);
    }
    else {
        Resto.push(percorer);
    }
}
multiplosTres.sort(function (a, b) { return a - b; });
multiplosCinco.sort(function (a, b) { return a - b; });
Resto.sort(function (a, b) { return a - b; });
console.log(multiplosTres);
console.log(multiplosCinco);
console.log(Resto);
