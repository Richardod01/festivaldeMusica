document.addEventListener('DOMContentLoaded', function(){
    navegacionFija();
    crearGaleria();
    resaltarEnlace();
    scrollNav();
})

function navegacionFija(){
    const header = document.querySelector('.header')
    const sobreFestival = document.querySelector('.sobre-festival')

    window.addEventListener('scroll', function(){
        if(sobreFestival.getBoundingClientRect().bottom < 1){
            header.classList.add('fixed')
        } else {
            header.classList.remove('fixed')
        }
    })
}

function crearGaleria() {
  const cantidadImagenes = 16;
  const galeria = document.querySelector(".galeria-imagenes");

  for (let i = 1; i <= cantidadImagenes; i++) {
    const imagen = document.createElement("PICTURE");
    imagen.innerHTML = `
    <source srcset="build/img/gallery/thumb/${i}.avif" type="image/avif">
    <source srcset="build/img/gallery/thumb/${i}.webp" type="image/webp">
    <img loading="lazy" width="200" height="300" src="build/img/gallery/thumb/${i}.jpg" alt="imagen galeria">`;

    //even handler
    imagen.onclick = function () {
      mostrarImagen(i);
    };

    galeria.appendChild(imagen);
  }
}

function mostrarImagen(i) {
  const imagen = document.createElement("PICTURE");
  imagen.innerHTML = `
    <source srcset="build/img/gallery/full/${i}.avif" type="image/avif">
    <source srcset="build/img/gallery/full/${i}.webp" type="image/webp">
    <img loading="lazy" width="200" height="300" src="build/img/gallery/thumb/${i}.jpg" alt="imagen galeria">
`;

  // Generar Modal
  const modal = document.createElement("div");
  modal.classList.add("modal");
  modal.onclick = cerrarModal;

  //Boton cerrar modal

  const botonCerrar = document.createElement("BUTTON");
  botonCerrar.textContent = "X";
  botonCerrar.classList.add("btn-cerrar");
  botonCerrar.onclick = cerrarModal;

  modal.appendChild(imagen);
  modal.appendChild(botonCerrar);

  //agregar al HTML
  const body = document.querySelector("body");
  body.classList.add("overflow-hidden");
  body.appendChild(modal);
}

function cerrarModal(){
    const modal = document.querySelector('.modal')
    modal.classList.add('fadeOut')
    
    setTimeout(() => {

        const body = document.querySelector('body')
        body.classList.remove('overflow-hidden')
        modal?.remove();
    }, 500);
}

function resaltarEnlace() {
    document.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section')
        const navLinks = document.querySelectorAll('.navegacion-principal a')

        let actual = '';
        sections.forEach( section => {
            const sectionTop = section.offsetTop
            const sectionHeight = section.clientHeight
            if(window.scrollY >= (sectionTop - sectionHeight / 3 ) ) {
                actual = section.id
            }
        })

        navLinks.forEach(link => {
            link.classList.remove('active')
            if(link.getAttribute('href') === '#' + actual) {
                link.classList.add('active')
            }
        })
    })
}

function scrollNav() {
    const navLinks = document.querySelectorAll('.navegacion-principal a')

    navLinks.forEach( link =>{
        link.addEventListener('click', e =>{
            e.preventDefault()
            const sectionScroll = e.target.getAttribute('href')
            const section = document.querySelector(sectionScroll)

            section.scrollIntoView({behavior: 'smooth'})
        })
    })

}