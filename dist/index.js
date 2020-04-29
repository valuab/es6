'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var num = 1;
console.log('hello world', num);

/**
 * 解构赋值
 * **/
// let [a,b,c] = [1,2]   //数组
// console.log(a,b,c)

// let {a,b,c} = {a:1,b:2}   //对象
// console.log(a,b,c)

var _sada = 'sada',
    _sada2 = _slicedToArray(_sada, 5),
    a = _sada2[0],
    b = _sada2[1],
    c = _sada2[2],
    d = _sada2[3],
    e = _sada2[4]; //字符串


console.log(a, b, c, d, e);

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
function log(first) {
  for (var _len = arguments.length, arr = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    arr[_key - 1] = arguments[_key];
  }

  console.log(arr[0]);
  console.log(arr[1]);
  console.log(arr[2]);
  console.log(arr[3]);
  console.log(arr[5]);
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var i = _step.value;

      console.log(i);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}
log(1, 2, 3, 4);

/* 
* 字符串模板
*/
var str = 'name';
var blog = 'my ' + str + ' is peter';
console.log(blog);

/**
 * 支持html标签
 * 
 * let blog = `<b>my</b> ${str} is peter`
 * 
 * 运算 查找
 * 判断首尾
 * 复制
 * */
console.log(blog.includes(str)); //true
console.log(blog.startsWith('my')); //true
console.log('name'.repeat(3)); //namenamename


/**
 * ES6数字操作
 * **/

/**
 * 8.ES6新增的数组方法
 * **/
var obj = {
  '0': 'a',
  '1': 'b',
  '2': 'c',
  length: 3
};
console.log(Array.from(obj));

var arr1 = Array.of(0, 1, 0, 21, 3);
console.log(arr1);
console.log(Array.from(arr1));
console.log(typeof arr1 === 'undefined' ? 'undefined' : _typeof(arr1));

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
var arr2 = [1, 2, 3, 4, 5, 67, 89, 9];
console.log(arr2);
arr2.fill('name', 2, 4);
console.log(arr2);

/**
 * for of 循环
 * entries() 实例方法
 * */

var arr3 = ['my', 'name', 'is'];

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
  for (var _iterator2 = arr3[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
    var i = _step2.value;

    console.log(i);
  }
} catch (err) {
  _didIteratorError2 = true;
  _iteratorError2 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion2 && _iterator2.return) {
      _iterator2.return();
    }
  } finally {
    if (_didIteratorError2) {
      throw _iteratorError2;
    }
  }
}

var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
  for (var _iterator3 = arr3.keys()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
    var _i2 = _step3.value;

    console.log(_i2);
  }
} catch (err) {
  _didIteratorError3 = true;
  _iteratorError3 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion3 && _iterator3.return) {
      _iterator3.return();
    }
  } finally {
    if (_didIteratorError3) {
      throw _iteratorError3;
    }
  }
}

var list = arr3.entries();
console.log(list.next().value);
console.log(list.next().value);
console.log(list.next().value);

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
var json = {
  a: 'a',
  b: 'b'
};
function eq(_ref) {
  var a = _ref.a,
      _ref$b = _ref.b,
      b = _ref$b === undefined ? 'a' : _ref$b;

  console.log(a, b);
}
eq(json);

var object = {
  a: 'a',
  b: 'b'
};
var arr4 = ['num', 'aad', 'asd'];
var arr5 = ['', ''];
var arr6 = [,];
console.log('a' in object); //true
console.log('aad' in arr4); //false
console.log(0 in arr5); //true
console.log(0 in arr6); //false

/**
 * 遍历方法
 * forEach
 * filter
 * some
 * map
 * */
arr4.forEach(function (val, index) {
  return console.log(index, val);
});
arr4.filter(function (x) {
  return console.log(x);
});
arr4.some(function (x) {
  return console.log(x);
});
console.log(arr4.map(function (x) {
  return 'web';
}));
/**
 * 分割方法
 * join
 * toString
 * */
console.log(arr4.join('|')); //分割替换
console.log(arr4.toString()); //逗号分隔


/**
 * 11. es6 中的对象
 * 对象赋值
 * 对象key值构建
 * 自定义对象方法
 * 对象比较  ===为同值相等，is()为严格相等。Object.is( )
 * 合并对象 Object.assign( )
 * **/

var name = 'web';
var age = 11;
var object11 = { name: name, age: age };
console.log(object11); //Object {name: "web", age: 11}

var key11 = 'name';
var object111 = _defineProperty({}, key11, 'web');
console.log(object111.name);

var obj11 = {
  add: function add(a, b) {
    return a + b;
  }
};
console.log(obj11.add(1, 5)); //6

var obj111 = { name: 'web' },
    obj112 = { age: 45 };
console.log(Object.assign(obj111, obj112));

/**
 * 12. Symbol 在对象中的应用
 * **/

/**
* 13. Set 和 WeakSet 数据结构
* **/

var setArr = new Set(['jspang', 'name', 'web', 'jspang']);
console.log(setArr); //Set {"jspang", "name", "web"}
var setArr1 = new Array(['jspang', 'name', 'web', 'jspang']);
console.log(setArr1); //[Array(4)]0: Array(4)0: "jspang"1: "name"2: "web"3: "jspang"

// set 的增删查
// 追加add：
setArr.add('age');
console.log(setArr); //{"jspang", "name", "web", "age"}
// 删除delete：
setArr.delete('age');
console.log(setArr); //{"jspang", "name", "web"}
// 查找has：
console.log(setArr.has('jspang')); //true
// 清除clear:
console.log(setArr.clear()); //undefined

/**
 * set的循环 for...of 循环:
 * set的循环 forEach 循环:
 * */
setArr = new Set(['jspang', 'name', 'web', 'jspang']); //自动除重
var _iteratorNormalCompletion4 = true;
var _didIteratorError4 = false;
var _iteratorError4 = undefined;

try {
  for (var _iterator4 = setArr[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
    var _i3 = _step4.value;

    console.log(_i3);
  }
} catch (err) {
  _didIteratorError4 = true;
  _iteratorError4 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion4 && _iterator4.return) {
      _iterator4.return();
    }
  } finally {
    if (_didIteratorError4) {
      throw _iteratorError4;
    }
  }
}

console.log(setArr.size); //3 类似于size
setArr.forEach(function (val) {
  console.log(val);
}); //打印同for of

/**
 * WeakSet 的声明 类似于set 的对象版 内部自动除重
 * 
 * **/
var weaksetObj = new WeakSet();
var obj13 = { name: 'a', age: 12 };
var obj131 = obj13;
weaksetObj.add(obj13);
weaksetObj.add(obj131);
console.log(weaksetObj);

/***
 * 14. map数据结构
 * 增删查
 * */
var json14 = {
  name: 'web',
  age: 16

  // 增加 set
};var map14 = new Map();
map14.set(json14, 'tag');
console.log(map14); //0: {Object => "tag"} key: {name: "web", age: 16} value: "tag"

var map141 = new Map();
map141.set('tag', json14);
console.log(map141); //0: {"tag" => Object} key: "tag" value: {name: "web", age: 16}

// 取值 get
console.log(map14.get(json14)); // tag
console.log(map141.get('tag')); // {name: "web", age: 16}

// 删除 delete
map14.delete(json14);
console.log(map14); // Map(0)

// 查找 has //查询值
console.log(map141.has('tag')); //true
console.log(map141.has('web')); //false
// 查找 has //查询key
console.log(typeof map14 === 'undefined' ? 'undefined' : _typeof(map14)); //true
console.log(map141.has('tag')); //true
console.log(map141.has('web')); //false

async function f1() {
  console.log(1);
}
async function f2() {
  console.log(1);
}
async function f3() {
  console.log(1);
}
async function f4() {
  console.log(1);
}
