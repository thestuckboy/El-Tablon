const title = document.getElementById('title');
const homeButton = document.getElementById('home');
const aboutButton = document.getElementById('about');
const serviceButton = document.getElementById('services');
const contactButton = document.getElementById('contact');

if (title.innerHTML == 'El Tablón - Inicio'){
    homeButton.classList.toggle('active');
}
else if (title.innerHTML == 'El Tablón - Nosotros'){
    aboutButton.classList.toggle('active');
}
else if (title.innerHTML == 'El Tablón - Servicios'){
    serviceButton.classList.toggle('active');
}
else if (title.innerHTML == 'El Tablón - Contacto'){
    contactButton.classList.toggle('active');
}