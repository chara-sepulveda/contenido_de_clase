let correo=document.querySelector('#correo')
let contrasenia = document.querySelector('#contrasenia')
let botton = document.querySelector('#enviarLogin')

botton.addEventListener('click',()=>{
    enviarDatos()
})
const enviarDatos=()=>{
   let  usuario={
correo:'',
contrasenia:'',
    };
    usuario.correo=correo.value
    usuario.contrasenia=contrasenia.value

    let jsonUsuario=JSON.stringify(usuario)


     localStorage.setItem(correo.value, jsonUsuario);
     alert('se ha enviado al local storage');
     obtenerUsuario()
}
const obtenerUsuario =()=>{
    let usuario = document.querySelector('#usuario')
    let objUsuario=JSON.parse(localStorage.getItem('charaprograms19@gmail.com'))
    usuario.innerHTML=objUsuario.correo
}