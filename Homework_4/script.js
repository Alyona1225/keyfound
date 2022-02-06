//let x = prompt('Введите число') 
//let y=3*x*x*x*x*x*x-6*x*x-7
//console.log(y)                                                          //Найти значение функции у=3*х^6 - 6*х^2 - 7 при данном значении х.
                                


//let x = prompt('Введите число') 
//let y=4*(x-3)*(x-3)*(x-3)*(x-3)*(x-3)*(x-3)-7*(x-3)*(x-3)*(x-3)+2
//console.log(y)                                                         //Найти значение функции y = 4·(x–3)^6 – 7·(x–3)^3 + 2 при данном значении x.



//let x=prompt('введите количество кг (1)')
//let y=prompt('введите количество кг (2)')   
//let a=prompt('Введите стоимость')
//let n=a/x
//let l=a/y
//console.log(n)
//console.log(l)                                                         // Известно, что X кг конфет стоит A рублей. Определить, сколько стоит 1 кг и Y кг этих же конфет.



//let N=prompt('Введите количество секунд')
//N = Math.round(N);
//let t=N/60
//t = Math.round(t);
//console.log(t)                                                         //С начала суток прошло N секунд (N — целое). Найти количество полных минут, прошедших с начала суток.



//let t=prompt('day')
//if(t%7 ===0){
//    console.log("Sunday")
//}else if(t%7 ===1){
//    console.log("Monday")                         
//}else if (t%7 ===2) {
//    console.log("Tuesday")
//}else if (t%7 ===3){
//    console.log("Wednesday")
//}else if(t%7 ===4){
//    console.log("Thursday")
//}else if (t%7 ===5){                                      //Дни недели пронумерованы следующим образом: 0 — воскресенье, 1 — понедельник, 2 — вторник, . . . , 6 — суббота. 
//    console.log("Friday")                                //Дано целое число K, лежащее в диапазоне 1–365. Определить номер дня недели для K-го дня года, если известно, что в этом году 1 января было понедельником. 
//}else{ console.log("Saturday")}                          
                                                                         
                                                                
//let F
//let A=prompt("Введите число А")       
//let B=prompt("Введите число B")
//let C=prompt("Введите число C") 
//if (A>0 && B>0 && C>0 ){
//  F=true;
//}else{
//    F=false
//}
//console.log(F)                            //Даны три целых числа: A, B, C. Проверить истинность высказывания: «Хотя бы одно из чисел A, B, C положительное»



//let F
//let A=prompt("Введите число А")       
//let B=prompt("Введите число B")
//let C=prompt("Введите число C") 
//if (A>0 && B<0 && C<0){
//  F=true;
//}else if(A<0 && B>0 && C<0){
//    F=true
//}else if(A<0 && B<0 && C>0){
//    F=true
//}else{
//    F=false
//}
//console.log(F)                              //Даны три целых числа: A, B, C. Проверить истинность высказывания: «Ровно одно из чисел A, B, C положительное»




//let A=prompt("Введите первое число ")       
//let B=prompt("Введите второе число ")
//let C=prompt("Введите третье число ") 
//let F
//if(A>B>C){
//   F=A+B
//} else if (A>C>B){
//    F=A+C
//}else if(B>C>A){
//    F=B+C
//}
//console.log(F)                            //Даны три числа. Найти сумму двух наибольших из них.



function for_40(){
    let A=prompt()
    let B=prompt()
    let count =1
    for(; A<=B; A++){
        for(let i=0;i<count; i++){
            console.log (A)
        }
        count++
    }
}


