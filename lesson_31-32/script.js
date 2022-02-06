//let first = prompt("Первое число")
//let second = prompt("Второе число")
//
//for(; first <= second; first++){
//    console.log(first)
//}                                                 //Выводит определенный порядок чисел, от "первое число" до "второе число"




//let A =prompt("Введите число А")
//let B =prompt("Введите число В")
//
//let result = 0
//
//for(let i = 0; i <= A; i++){
//  result +=B**i
//} 
//console.log(result)                        //Дано вещественное число А и целое число N (> 0). Используя один цикл, найти сумму 1+A+A^2 + A^3 + ... + A^N




//let number=prompt("Число")
//let result =1
//for(let i=1; i<=number; i++){
//    result = result*i
//}
//console.log (result)                       //Дано целое число N(>0). Найти произвдение N!=1*2*...*N




let N = prompt('Введите число') 
let r = 0 
for(let i = 1;N>=i; i++){ 
    r += i**i 
    console.log(r) 
} 
console.log(r)                       //Дано целое число N (>0). Найти сумму 1^1 + 2^2 + ... + N^N