/*
 * @Author: YJ
 * @Date: 2020-06-30 14:12:49
 * @
# Description: 
 */
let user = {};
user.name = "John"
user.surname = "Smith"
user.name = "Pete"
delete user.name
console.log(user)

// 检查空对象
function isEmpty(obj) {
    for (let i in obj) {
        return false
    }
    return true
}


// 成员数值相加求和
let salaries = {
    "John": 123,
    "Peter": 120,
    "Smith": 117,
}

function sum(obj) {
    let sum = 0
    for (let i in obj) {
        sum += obj[i]
    }
    return sum
}
console.log(sum(salaries))
console.log(sum())

// 数值属性都乘以2
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(obj) {
    for (let i in obj) {
        if (typeof (obj[i]) === 'number') {
            obj[i] = obj[i] * 2
        }
    }
    return obj
}
console.log(multiplyNumeric(menu))



// 创建一个计算对象 prompt alert 属于浏览器
// let calculator = {
//     sum: function(){
//         return this.a + this.b
//     },
//     mul: function(){
//         return this.a * this.b
//     },
//     read: function(){
//         this.a = +prompt('a?',0)
//         this.b = +prompt('b?',0)
//     }
// }
// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

// 一个上下移动的对象
// let ladder = {
//     step: 0,
//     up() {
//         this.step++;
//     },
//     down() {
//         this.step--;
//     },
//     showStep: function () { // 显示当前的 step
//         alert(this.step);
//     }
// };

// let ladder = {
//     step: 0,
//     up() {
//       this.step++;
//       return this
//     },
//     down() {
//       this.step--;
//       return this
//     },
//     showStep: function() { // 显示当前的 step
//       alert( this.step );
//     }
//   };

