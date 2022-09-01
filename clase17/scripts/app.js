
// funcion callback sincronica

const saludar = (nombrePersona)=>{
console.log(`hola ${nombrePersona}`)
}

const pedirNombre=(callBack)=>{
     let nombre = prompt('ingrese nombre')
     callBack(nombre)
}

pedirNombre(saludar)