const texto ='c H A R A'
let patron = new RegExp(/\c/)
console.log(patron.test(texto))

const txt = 'python es el mejor lenguaje de programacion'
const txtReplaced=txt.replace(/python|python/,'JavaScript')
console.log(txtReplaced)
const user ='chara'
const patronUser=/^[a-z]/
console.log(patronUser.test(user))