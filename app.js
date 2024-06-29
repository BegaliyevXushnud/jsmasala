
// let number1 = +prompt();
// let number2 = +prompt();
// console.log(number1);
// console.log(number2);

// if(isNaN(number1,number2)){
//     console.log("Son kiriting");
// }else{
//     console.log(`ko'paytmasi: ${number1 * number2} `);
//     console.log(`qo'shilmasi: ${number1 + number2} `);
//     console.log(`ayirmasi: ${number1 - number2} `);
//     console.log(`bo'linmasi :${parseInt(number1 / number2)} `);
// }

// 1-Masala







let n1 = +prompt();
if(isNaN(n1)){
         console.log("Son kiriting");
     }else{
        if(n1 > 0){
            console.log(n1 - 1);
        }else{
            console.log(n1 + 1);
        }
     }