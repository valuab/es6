/*
 * @Author: YJ
 * @Date: 2020-07-02 15:18:29
 * @
# Description: 
 */ 
// 真题练习
// 正则判断美元格式
function isUSD(str) {

}

isUSD('$1,023,032.03')

// 乘法

// function multiply(a,b){
//     let aFixed = 10 ** (+a.toFixed())
//     let bFixed = 10 ** (+b.toFixed())
//     console.log(aFixed,bFixed)
//     return (a * aFixed) * (b * bFixed) / 10 ** (+a.toFixed() + +b.toFixed())
// }

function multiply(a, b) {
    a = a.toString();
    b = b.toString();
    var aLen = a.substring(a.indexOf(".")+1).length;
    var bLen = a.substring(a.indexOf(".")+1).length;
    return (a * Math.pow(10,aLen)) * (b * Math.pow(10,bLen)) / Math.pow(10,aLen+bLen);
}
console.log(multiply(1.2,2.30))
console.log(multiply(3,0.0001))