async function f() {
    throw new Error('出错了');
}

f().then(
    v => console.log(v),
    e => console.log(e)
)