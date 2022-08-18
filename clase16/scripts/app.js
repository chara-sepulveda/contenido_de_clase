// sessionStorage.setItem("id", 123)

// console.log(sessionStorage.getItem("id"))

const usuario = {
nombre: 'chara sepulveda',
edad: 26,
correo: 'charaprograms19@gmail.com'

}
const jsonUsuario = JSON.stringify(usuario)
localStorage.setItem(usuario.correo,jsonUsuario)

console.log(localStorage.getItem('charaprograms@gmail.com'))