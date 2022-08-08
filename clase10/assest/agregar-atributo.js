let titulos = document.querySelectorAll('h1')
for (let i = 0; i < titulos.length; i++) {
titulos[i].className='titulo'

}
titulos[1].id='titulo1'
titulos[2].id='titulo2'

console.log(titulos)

let imagen=document.getElementById('imagen')
imagen.setAttribute('src', 'https://media.gettyimages.com/photos/the-yamaha-mt09-is-displayed-at-the-2016-intermot-trade-fair-on-4-picture-id612432488?s=612x612')


let enlace=document.querySelector('a')
enlace.setAttribute('href','https://www.google.com/?hl=es')