/**
 * 解构赋值任务
 * */ 
/*
解构赋值
重要程度: 5
我们有一个对象：

let user = {
  name: "John",
  years: 30
};
写一个解构赋值语句使得：

name 属性赋值给变量 name。
years 属性赋值给变量 age。
isAdmin 属性赋值给变量 isAdmin（如果属性缺失则取默认值 false）。
*/ 
let user = { name: "John", years: 30 };
let {name,years:age,isAdmin = false} = user

console.log( name ); // John
console.log( age ); // 30
console.log( isAdmin ); // false