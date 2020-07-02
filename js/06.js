/*
属性求和
重要程度: 5
有一个带有任意数量薪水的 salaries 对象。

编写函数 sumSalaries(salaries)，该函数使用 Object.values 和 for..of 循环返回所有薪水的总和。

如果 salaries 是空对象，那么结果必须是 0。
*/
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function sumSalaries(obj) {
    let sum = 0
    for (let i of Object.values(obj)) {
        sum += i
    }
    return sum
}
console.log(sumSalaries(salaries))
console.log(sumSalaries({}))

/*
计算属性数量
重要程度: 5
写一个函数 count(obj)，该函数返回对象中的属性的数量：
*/
let user = {
    name: 'John',
    age: 30
};

function count(obj){
    return Object.keys(obj).length
}
console.log(count(user))