let num = 1
console.log('hello world',num)

/**
 * 解构赋值
 * **/ 
// let [a,b,c] = [1,2]   //数组
// console.log(a,b,c)

// let {a,b,c} = {a:1,b:2}   //对象
// console.log(a,b,c)

let [a,b,c,d,e] = 'sada'  //字符串
console.log(a,b,c,d,e)

/**
 * 
 *  扩展运算符和rest运算符
 * **/
// ...
// function log(...arr){
//     console.log(arr[0])
//     console.log(arr[1])
//     console.log(arr[2])
//     console.log(arr[3])
//     console.log(arr[5])
// }
// log(1,2,3,4)

// rest
function log(first,...arr){
    console.log(arr[0])
    console.log(arr[1])
    console.log(arr[2])
    console.log(arr[3])
    console.log(arr[5])
    for(let i of arr){
        console.log(i)
    }
}
log(1,2,3,4)


/* 
* 字符串模板
*/ 
let str = 'name'
let blog = `my ${str} is peter`
console.log(blog)

/**
 * 支持html标签
 * 
 * let blog = `<b>my</b> ${str} is peter`
 * 
 * 运算 查找
 * 判断首尾
 * 复制
 * */ 
console.log(blog.includes(str))//true
console.log(blog.startsWith('my'))//true
console.log('name'.repeat(3))//namenamename


/**
 * ES6数字操作
 * **/ 

 
/**
 * 8.ES6新增的数组方法
 * **/ 
let obj = {
    '0':'a',
    '1':'b',
    '2':'c',
    length:3
}
console.log(Array.from(obj))

let arr1 = Array.of(0,1,0,21,3)
console.log(arr1)
console.log(Array.from(arr1))
console.log(typeof(arr1))

/** 
 * find 实例方法 寻找
 * */ 
// let arr2 = [1,2,3,4,5,67,89,9]
// arr2.find((val,index,arr)=>{
//     console.log(val,index,arr)
// })

/**
 * fill 实例方法 填充 改变内存
 * 
 * */ 
let arr2 = [1,2,3,4,5,67,89,9]
console.log(arr2)
arr2.fill('name',2,4)
console.log(arr2)

/**
 * for of 循环
 * entries() 实例方法
 * */ 

let arr3 = ['my','name','is']

for(let i of arr3){
    console.log(i)
}
for(let i of arr3.keys()){
    console.log(i)
}
let list = arr3.entries()
console.log(list.next().value)
console.log(list.next().value)
console.log(list.next().value)



/**
 * 9. es6 的箭头函数及扩展
 * **/ 

/**
 * 默认值
 * **/ 
// function add(a,b=1){
//     return a+b
// }
// console.log(add(1))

/**
 * 抛出错误
 * **/ 
// function add(a,b=1){
//     if(a == 0){
//         throw new Error('This is error')
//     }
//     return a+b
// }
// console.log(add(0))


/**
 * 箭头函数
 * */ 
// let add = (a,b=1) => a+b;
// console.log(add(0))


/**
 *10. es6 中的函数和数组补漏
 * */ 

 /**
 *对象的函数解构
 * */ 
let json= {
    a:'a',
    b:'b',
}
function eq({a,b='a'}){
    console.log(a,b)
}
eq(json)

let object = {
    a:'a',
    b:'b'
}
let arr4 = ['num','aad','asd']
let arr5 = ['','']
let arr6 = [,]
console.log('a' in object) //true
console.log('aad' in arr4) //false
console.log(0 in arr5) //true
console.log(0 in arr6) //false

/**
 * 遍历方法
 * forEach
 * filter
 * some
 * map
 * */ 
arr4.forEach((val,index)=>console.log(index,val));
arr4.filter(x=>console.log(x));
arr4.some(x=>console.log(x));
console.log(arr4.map(x=>'web'));
/**
 * 分割方法
 * join
 * toString
 * */  
console.log(arr4.join('|'));//分割替换
console.log(arr4.toString());//逗号分隔


/**
 * 11. es6 中的对象
 * 对象赋值
 * 对象key值构建
 * 自定义对象方法
 * 对象比较  ===为同值相等，is()为严格相等。Object.is( )
 * 合并对象 Object.assign( )
 * **/ 

let name = 'web'
let age = 11
let object11 = {name,age}
console.log(object11) //Object {name: "web", age: 11}

let key11 = 'name'
let object111 = {
    [key11] :'web'
}
console.log(object111.name)

let obj11 = {
    add:function(a,b){
        return a + b
    }
}
console.log(obj11.add(1,5))//6

let obj111 = {name:'web'},obj112 = {age:45}
console.log(Object.assign(obj111,obj112))


/**
 * 12. Symbol 在对象中的应用
 * **/ 


 /**
 * 13. Set 和 WeakSet 数据结构
 * **/ 

let setArr = new Set(['jspang','name','web','jspang']);
console.log(setArr);//Set {"jspang", "name", "web"}
let setArr1 = new Array(['jspang','name','web','jspang']);
console.log(setArr1);//[Array(4)]0: Array(4)0: "jspang"1: "name"2: "web"3: "jspang"

// set 的增删查
// 追加add：
setArr.add('age')
console.log(setArr)//{"jspang", "name", "web", "age"}
// 删除delete：
setArr.delete('age')
console.log(setArr)//{"jspang", "name", "web"}
// 查找has：
console.log(setArr.has('jspang'))//true
// 清除clear:
console.log(setArr.clear());//undefined

/**
 * set的循环 for...of 循环:
 * set的循环 forEach 循环:
 * */ 
setArr = new Set(['jspang','name','web','jspang']);//自动除重
for(let i of setArr){
    console.log(i)
}
console.log(setArr.size)//3 类似于size
setArr.forEach((val)=>{console.log(val)}) //打印同for of

/**
 * WeakSet 的声明 类似于set 的对象版 内部自动除重
 * 
 * **/ 
let weaksetObj = new WeakSet()
let obj13 = {name:'a',age:12}
let obj131 = obj13
weaksetObj.add(obj13)
weaksetObj.add(obj131)
console.log(weaksetObj)


/***
 * 14. map数据结构
 * 增删查
 * */ 
let json14 = {
    name:'web',
    age:16
}

// 增加 set
let map14 = new Map()
map14.set(json14,'tag')
console.log(map14) //0: {Object => "tag"} key: {name: "web", age: 16} value: "tag"

let map141 = new Map()
map141.set('tag',json14)
console.log(map141) //0: {"tag" => Object} key: "tag" value: {name: "web", age: 16}

// 取值 get
console.log(map14.get(json14)) // tag
console.log(map141.get('tag')) // {name: "web", age: 16}

// 删除 delete
map14.delete(json14)
console.log(map14) // Map(0)

// 查找 has //查询值
console.log(map141.has('tag'))//true
console.log(map141.has('web'))//false
// 查找 has //查询key
console.log(typeof(map14))//true
console.log(map141.has('tag'))//true
console.log(map141.has('web'))//false

async function f1(){
    console.log(1)
}
async function f2(){
    console.log(1)
}
async function f3(){
    console.log(1)
}
async function f4(){
    console.log(1)
}