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


/**
  最高薪资
  重要程度: 5
 * 
 * */ 

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function topSalary(obj){
  let max = 0,maxName = null;
  for(let [name,salary] of Object.entries(obj)){
    if(salary > max){
      max = salary
      maxName = name
    }
  }
  return [maxName,max]
}

console.log(topSalary(salaries))

/*
  遍历获取原生对象如 数组中的构造函数名
  Object.keys() 会忽略
*/ 
console.log(Object.keys(new Array()))
console.log(Reflect.ownKeys(new Array()))//一个length 构造方法