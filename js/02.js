let str = '1203+ 456 789'
console.log(str.indexOf(' '))
let exp = new RegExp("03+" + '.', 'g')
console.log(exp)
let title = '领克03+到手，我们要搞大事情'
title = title.replace(exp, 'xb')
console.log(title)
title = title.replace(/03./g, 'kl')
console.log(title)

let string = '测试JavaScript正则表达式的工具，只要输入正则的内容就可以输出匹配结果等等。如果正则表达式不改变，可以观察到记录的lastIndex等等属性、并且能观察到属性的改变过程。能观察到属性的改变过程'
console.log(string.length)
// 字符串
/**
 * 字符串拼接加换行
 * 九九乘法表 
 */

let int = ''
for (let i = 0; i <= 9; i++) {
     for (let j = 0; j <= i; j++) {
          int += i + "*" + j + "=" + i * j + " ";
          if (i === j) {
               int += "\n";
          }
     }
}
console.log(int)

/**
 * 字符串检索
 * includes，startsWith，endsWith,indexOf
 * */ 
let word = 'xb'
if(title.includes(word)){
     if(title.startsWith("领")){
          console.log('范围合适',title.indexOf("领"))
     }
     if(title.endsWith("情")){
          console.log('范围合适1',title.indexOf("情"))
     }
}

/**
 * slice(start, end)	从 start 到 end（不含 end）	允许
* substring(start, end)	start 与 end 之间（包括 start，但不包括 end）	负值代表 0
* substr(start, length)	从 start 开始获取长为 length 的字符串	允许 start 为负数
 * **/ 