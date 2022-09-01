const perdirNombre= new Promise((resolve,reject)=>{
    setTimeout(() => {
        let nombre = prompt('ingrese nombre')
        if (nombre.length > 0){
            resolve(nombre)
        }else{
            reject('algo salio mal')
        }
    }, 2000);
})
perdirNombre.then((result)=>{
    console.log(result)
}).catch(err=>console.log(err))