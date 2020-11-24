// JSON 方法
// JSON.stringify 对象字符串化
function log(val) {
    console.log(val, '' + this)
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
log(JSON.stringify(meetup, function replacer(key, value) {
    log()
    log(value)
}))

// 初始值 proxy // 对象代理测试
let data = {
    name: 'joy',
    age: 18,
    _defineSex: 'male'
}

let newData = new Proxy(data, {
    get() {
        console.log('读取')
    },
    set() {
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
let proxy = Proxy
Reflect.set(caps, 'name', 'John')
// Reflect.construct(()=>{},'参数列表','up')

console.log(this)
console.log(Reflect)
console.log(newData._defineSex)
console.log(caps)
console.log(caps.name)
console.log(Reflect.ownKeys(newData))
console.log(Reflect.ownKeys(Reflect))
console.log(Reflect.ownKeys(proxy))
console.log(Reflect.ownKeys(caps))

/**
 * @name: Reflect
 * @msg: api 反映
 * @function 'defineProperty', //私有属性保护 有一个普遍的约定，即以下划线 _ 开头的属性和方法是内部的。不应从对象外部访问它们。
 * @function 'deleteProperty', //
 * @function 'apply',
 * @function 'construct',
 * @function 'get',
 * @function 'getOwnPropertyDescriptor',
 * @function 'getPrototypeOf',
 * @function 'has',
 * @function 'isExtensible',
 * @function 'ownKeys', //获取对象所有的 key 
 * @function 'preventExtensions',
 * @function 'set',
 * @function 'setPrototypeOf'
 */


//  数组对象代理测试
let newArr = [1, 2, 3]
let arrProxy = new Proxy(newArr, {
    get() {
        console.log('获取')
    },
    set() {
        console.log('写入')
    }
})

arrProxy[1] //获取
arrProxy[3] = 4 //写入
newArr.push(4) //访问源对象无效 无法操作使用数组方法
console.log(newArr)

// 将数组放入对象代理

let newObjArr = new Proxy({
    newArr
}, {
    get(targe,props) {
        console.log('获取',targe,props)
        // console.log(typeof targe) //object
    },
    set() {
        console.log('写入')
    }
})

newObjArr.newArr //获取
// console.log(newObjArr)
// console.log(newObjArr.newArr)
console.log(newArr)
// console.log(typeof(newObjArr.newArr))
// newObjArr.newArr.push(4) //获取