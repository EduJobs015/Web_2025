var idade = [10, 15, 20, 8, 17, 25];
for (var _i = 0, idade_1 = idade; _i < idade_1.length; _i++) {
    var num = idade_1[_i];
    if (num < 12) {
        console.log("Criança de");
    }
    else if (num > 18) {
        console.log("Adolescente");
    }
    else {
        console.log("Adulto");
    }
}
