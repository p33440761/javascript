function getRandom(x) {
    return Math.floor(Math.random() * x) + 1
}

let arr = [];

let n = 0;

function getPowerNum() {


    for (let i = 1; i <= 6; i++) {

        let num = getRandom(38);
        if (arr.indexOf(num) > -1) {
            i--;
            //continue語句只能用在while語句、do/while語句、for語句、或者for/in語句的迴圈體內,在其它地方使用都會引起錯誤!
            continue;
        } else {
            arr.push(num)
        }
    }
    //return語句只能出現在函式體內
    // return `第一區號碼為： ${arr.join(",")}，第二區號碼為： ${n}`;



    //https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    // 若 compareFunction(a, b) 的回傳值小於 0，則會把 a 排在小於 b 之索引的位置，即 a 排在 b 前面。
    //若 compareFunction(a, b) 的回傳值大於 0，則會把 b 排在小於 a 之索引的位置，即 b 排在 a 前面。

    arr.sort(function (a, b) {
        return a - b;
    })
}


n = getRandom(8)
getPowerNum();

//join 將陣列轉為字串 
//join() 方法用來將陣列的所有元素按指定的分隔符號合併成一個字串。
alert(`第一區號碼為: ${arr.join('.')}  第二區號碼為: ${n}`)




