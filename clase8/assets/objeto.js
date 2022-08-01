let mascota={
    nombre:"teyker",
    raza:"pitbull",
    color: "blanco y cafe",
    hambriento:true,
    ladrando: function(nombre,color){
        this.color=color
        this.nombre=nombre
        return `El esta ${this.nombre} esta ladrando`
    }

}
console.log(mascota)
console.log(`${mascota.color} ${mascota.nombre}`)
console.log(mascota.ladrando("kratos","negro"))
console.log(mascota)

let mascotas=[
    {nombre:"teyker",color:"cafe"},
    {nombre:"akiles",color:"cafe"}
]
console.log(mascotas)