var numeros1 = [45, 29, 33, 10, 22, 50, 67, 88, 79, 74];
var impar = [];
var par = [];
var armazenar = numeros1[0];
for (var _i = 0, numeros1_1 = numeros1; _i < numeros1_1.length; _i++) {
    var imparPar = numeros1_1[_i];
    if (imparPar % 2 == 1) {
        if (armazenar <= imparPar) {
            impar.push(imparPar);
        }
        else {
            impar.unshift(imparPar);
        }
    }
    else {
        if (armazenar <= imparPar) {
            par.push(imparPar);
        }
        else {
            par.unshift(imparPar);
        }
    }
    armazenar = imparPar;
}
console.log(impar);
console.log(par);
