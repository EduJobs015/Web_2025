var numeros1 = [12, 25, 37, 40, 18, 55, 62, 71, 84, 91];
var impar = [];
var par = [];
for (var _i = 0, numeros1_1 = numeros1; _i < numeros1_1.length; _i++) {
    var imparPar = numeros1_1[_i];
    if (imparPar % 2 == 1) {
        impar.push(imparPar);
    }
    else {
        par.push(imparPar);
    }
}
console.log(impar);
console.log(par);
