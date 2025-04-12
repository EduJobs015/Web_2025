function dobrarNumeros(numbers: number[]): number []{
    for(let i = 0; i < numbers.length; i ++){
        numbers[i] = numbers[i] * 2 
    }
    return numbers
}
let numbers : number[] = [2, 4, 8, 10]
console.log(dobrarNumeros(numbers))