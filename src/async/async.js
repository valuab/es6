/*
 * @Author: YJ
 * @Date: 2020-06-09 17:36:58
 * @
# Description: 
 */
async function f() {
    throw new Error('出错了');
}

f().then(
    v => console.log(v),
    e => console.log(e)
)