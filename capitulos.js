let capitulosCompletados = { 1: false, 2: false };

// Abre un capítulo y muestra las escenas en el carrusel
function abrirCapitulo(capitulo) {
    console.log("Abriendo capítulo:", capitulo);
    capitulosCompletados[capitulo] = true;

    // Desbloquear capítulos según progreso
    if (capitulosCompletados[1]) {
        document.getElementById("capitulo-2").classList.remove("bloqueado");
    }
    if (capitulosCompletados[1] && capitulosCompletados[2]) {
        document.getElementById("capitulo-3").classList.remove("bloqueado");
    }

    // Cambiar a la vista de escenas
    document.getElementById("capitulos").classList.add("d-none");
    document.getElementById("escenas").classList.remove("d-none");

    // Actualizar las imágenes del carrusel según el capítulo
    actualizarCarrusel(capitulo);
}

// Actualizar las imágenes del carrusel dependiendo del capítulo
function actualizarCarrusel(capitulo) {
    const carouselInner = document.getElementById("carousel-inner");
    carouselInner.innerHTML = ""; // Limpiar carrusel

    // Escenas para cada capítulo
    if (capitulo === 1) {
        carouselInner.innerHTML = `
            <div class="carousel-item active">
                <img src="./images/alien.png" class="d-block w-100" alt="Escena 1">
            </div>
            <div class="carousel-item">
                <img src="./images/coliseo.jpg" class="d-block w-100" alt="Escena 2">
            </div>
            <div class="carousel-item">
                <img src="./images/estacion.jpg" class="d-block w-100" alt="Escena 3">
            </div>
        `;
    } else if (capitulo === 2) {
        carouselInner.innerHTML = `
            <div class="carousel-item active">
                <img src="./images/escena2_1.jpg" class="d-block w-100" alt="Escena 1">
            </div>
            <div class="carousel-item">
                <img src="./images/escena2_2.jpg" class="d-block w-100" alt="Escena 2">
            </div>
            <div class="carousel-item">
                <img src="./images/escena2_3.jpg" class="d-block w-100" alt="Escena 3">
            </div>
        `;
    } else if (capitulo === 3) {
        carouselInner.innerHTML = `
            <div class="carousel-item active">
                <img src="./images/coliseo.jpg" class="d-block w-100" alt="Escena 1">
            </div>
            <div class="carousel-item">
                <img src="./images/estacion.jpg" class="d-block w-100" alt="Escena 2">
            </div>
            <div class="carousel-item">
                <img src="./images/alien.jpg" class="d-block w-100" alt="Escena 3">
            </div>
        `;
    }
}

// Vuelve a la pantalla de capítulos
function volverACapitulos() {
    document.getElementById("escenas").classList.add("d-none");
    document.getElementById("capitulos").classList.remove("d-none");
}

// Muestra las instrucciones
function mostrarInstrucciones() {
    alert("Selecciona los capítulos en orden. Avanza entre escenas usando los controles del carrusel.");
}

// Cierra las instrucciones
function cerrarInstrucciones() {
    document.getElementById("instrucciones").classList.add("d-none");
}
