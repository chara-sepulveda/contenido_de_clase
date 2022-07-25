//condicional con if
let age = 19;
if(age>18){
    //console.log('eres mayor de edad");
    document.write(" eres mayor de edad");

}
//condicional con if else

if(age>=18){
    console.log('eres mayo de edad')
    
}else{
    console.log('eres menor de edad')
}

//condicional con switch

let  persoName = "charanga";
switch (persoName) {

    case "charanga",
    console.log(`a ${charanga} le gusta el baile`):
    break;
    case "mora",
    console.log(`a ${mora} le gusta el free`):
    break;
    default:
    console.log("esta es una persona")
    break;

}

let personGenre= "homnre"
personGenre === "mujer"? console.log("es una mujer"):console.log('es una mujer');
 console.log('es un hombre');
  persoGenre === "hombre"? console.log('es un hombre'):console.log('es una mujer');

  //operador ternario
let personAge = 19;
  
  personAge > 18 ? console.log('mayor a 18'): console.log('menor a 18')