//質數 除了1與自己外都不能整除
//Ex: 1,2,3,4,5
// let isPrime = true;
// 5 % 2 = 1
// 5 % 3 = 2
// 5 % 4 = 1
//5是質數


//dividend = 被除數
for (let dividend = 2; dividend <= 100; dividend++) {

    let isPrime = true;
    // divisor =除數
    for (let divisor = 2; divisor < dividend; divisor++) {
        if (dividend % divisor == 0) {
            isPrime = false;
        }
    }

    if (isPrime == false) {
        console.log(`${dividend} != 質數`)
    } else {
        console.log(`${dividend} == 質數`)
    }


}


