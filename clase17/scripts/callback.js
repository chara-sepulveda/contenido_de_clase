// funcion callback asincronica

const saludar = (nombrePersona)=>{
    setTimeout(() => {
        console.log(`hola ${nombrePersona}`)
        
    }, 3000);
    }
    
    const pedirNombre=(callBack)=>{
         let nombre = prompt('ingrese nombre')
         callBack(nombre)
    }
    
    pedirNombre(saludar)