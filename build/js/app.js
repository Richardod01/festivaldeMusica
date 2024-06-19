document.addEventListener('DOMContentLoaded', function(){
    crearGaleria();
})

function crearGaleria(){
    const cantidadImagenes = 16;
    const galeria = document.querySelector('.galeria-imagenes')

    for(let i=1; i<=cantidadImagenes; i++){
        const imagen = document.createElement('IMG')
        imagen.src = `../src/img/gallery/full/${i}.jpg`
        imagen.alt = 'Imagen Galeria'

        //even handler
        imagen.onclick = function(){
            mostrarImagen(i)
        }

        galeria.appendChild(imagen)
    }
}

function mostrarImagen(i){
    // Generar Modal

    const modal = document.createElement('div')
    modal.classList.add('modal')
    modal.onclick = cerrarModal

    //agregar al HTML
    const body = document.querySelector('body')
    body.appendChild(modal)
}

function cerrarModal(){
    const modal = document.querySelector('.modal')
    modal?.remove();
}