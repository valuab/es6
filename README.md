<<<<<<< HEAD
# es6
语法学习
=======
## es6使用联系
 一. 安装 babel 转译器  
    1. cnpm i babel-cli -g  安装babel命令行
    2. babel src/index.js -o dist/index.js  转译文件到指定文件
    3. 转译es6到es5 下载  cnpm i --save-dav  babel-preset-es2015  babel-cli
    4. 本地设置.babelrc文件
 二. 自动编译
   
"scripts": {
    "build": "babel 1.js -o build.js -w"
  }
 
// 编译1.js文件，-o表示输出到build.js中 ，-w代表实时编译，一保存就立马编译并且写回到build.js文件中
>>>>>>> 提交
