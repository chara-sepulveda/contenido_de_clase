class personas {
    constructor(nombre,ciudad,edad,genero){
this.nombre=nombre;
this.ciudad=ciudad;
this.edad=edad;
this.genero=genero;

    }
    caminar(){
        console.log(`${this.nombre} esta caminando`)
    }
    get obtenerEdad(){
        return this.edad
    }
    get obtenerGenero(){
        return this.obtenerGenero
    }
    set establecerNombre(nombre){
        this.nombre=nombre
    }
}
const persona1=new persona('charanga', 'medellin', 26 , 'masculino')
console.log(persona1)

const persona2=new persona('mora', 'medellin', 26 , 'masculino')
persona2.establecerNombre='teyker'
console.log(persona2)