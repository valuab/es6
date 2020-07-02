/**
 * map set
 * */
/**
 * 过滤数组中的唯一元素
 * */
function unique(arr) {
    /* 你的代码 */
    // return new Set(arr)
    return Array.from(new Set(arr));
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(values))


/**
 * 迭代键
 * */ 
let map = new Map();

map.set("name", "John");

let keys = map.keys();

keys = Array.from(keys)
// Error: keys.push is not a function
keys.push("more");
console.log(keys)