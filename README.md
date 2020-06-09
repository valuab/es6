# es6
语法学习
## es6使用练习
 一. 安装 babel 转译器  
    1. cnpm i babel-cli -g  安装babel命令行 这是全局安装脚手架
    2. babel src/index.js -o dist/index.js  转译文件到指定文件
    3. 转译es6到es5 下载  cnpm i --save-dav  babel-preset-es2015  babel-cli
    4. 本地设置.babelrc文件
 二. 自动编译
   例如：编译单文件导出
   "build":"babel src/index.js -o dist/index.js -w",
  "scripts": {
      "build": "babel 1.js -o build.js -w"
    }
 
// 编译1.js文件，-o表示输出到build.js中 ，-w代表实时编译，一保存就立马编译并且写回到build.js文件中

三，编译多文件打包
  1.安装 babel-cli 每个项目单独配置，不建议安装到全局
    cnpm i babel-cli --save-dev
  
  2.常用打包命令指向：
    1. 编译当前文件  babel src/index.js  编译结果输出在当前终端
    2. 编译当前文件输出到新文件中 babel src/index.js -o dist/index.js 或/同 babel src/index.js --out-file  dist/index.js
    3. 实时编译当前文件并输出  babel src/index.js -w -o dist/index.js 或/同 babel src/index.js --watch --out-file dist/index.js
    4. 编译文件夹并输出到另一个文件夹 babel src -d dist 或/同 babel src --out-dir dist
    5. 实时编译文件夹并输出到另一个文件夹 babel src -w -d dist 或/同 babel src --watch --out-dir dist
    6. 编译文件夹输出到一个单文件 babel src -o dist/index.js 或/同 babel src --out-file dist/index.js
    7. 实时编译一个文件夹文件输出到一个单文件 babel src -w -o  dist/index.js 或/同 babel src --watch --out-file dist/index.js
    8. babel-node 命令行中运行es6代码 
  
  3.指令集：
    1.-o --out-file 输出文件
    2.-w --watch 实时监控文件变化
    3.-d --out-dir 输出文件夹

四、babel文档 ： https://www.babeljs.cn/docs/plugins