// JSON 方法
// JSON.stringify 对象字符串化
function log(val) {
    console.log(val,''+this)
}

let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null
};

log(JSON.stringify(student))

/*
字符串使用双引号。JSON 中没有单引号或反引号。所以 'John' 被转换为 "John"。
对象属性名称也是双引号的。这是强制性的。所以 age:30 被转换成 "age":30。

JSON 是语言无关的纯数据规范，因此一些特定于 JavaScript 的对象属性会被 JSON.stringify 跳过。

即：

函数属性（方法）。
Symbol 类型的属性。
存储 undefined 的属性。
*/

let user = {
    sayHi() { // 被忽略
        alert("Hello");
    },
    [Symbol("id")]: 123, // 被忽略
    something: undefined // 被忽略
};
log(user)
log(JSON.stringify(user))

/*
    不能有循环引用
*/


/**
 * 将对象转换为 JSON，然后再转换回来
重要程度: 5
将 user 转换为 JSON，然后将其转换回到另一个变量。
 * */
let obj = {
    name: "John Smith",
    age: 35
}

obj = JSON.stringify(obj)
log(obj)
console.log(typeof (obj))
let newObj = JSON.parse(obj)
console.log(newObj)
console.log(typeof (newObj))


/**
 * 对象中的循环引用问题
 * */

let room = {
    number: 23
};

let meetup = {
    title: "Conference",
    occupiedBy: [{
        name: "John"
    }, {
        name: "Alice"
    }],
    place: room
};

room.occupiedBy = meetup;
meetup.self = meetup;

log(meetup)

/**
 * 没有弄清楚数据状态改变的发生
 * 
 * */ 
log(JSON.stringify(meetup,function replacer(key,value){
    log( )
    log(value)
}))

// 初始值 proxy
let data = {
    name:'joy',
    age:18
}

let newData = new Proxy(data,{
    get(){
        console.log('读取')
    },
    set(){
        console.log('写入')
    }
})


// data.name
newData.name //读取
newData.age = 19 //写入
newData.width = 191 //写入
newData.width //读取

// Reflect
let caps = {}
Reflect.set(caps, 'name', 'John')
Reflect.construct(()=>{},'参数列表','up')
