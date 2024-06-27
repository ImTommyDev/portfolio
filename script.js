let menuVisible = false;
//Función para ocultar o mostrar el menú
function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar() {
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

//Función que aplica las animaciones de las habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top
    if (distancia_skills >= 300) {
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("net");
        habilidades[1].classList.add("java");
        habilidades[2].classList.add("sql");
        habilidades[3].classList.add("sage");
        habilidades[4].classList.add("html");
        habilidades[5].classList.add("css");
        habilidades[6].classList.add("javascript");
        habilidades[7].classList.add("react");
        habilidades[8].classList.add("organizacion");
        habilidades[9].classList.add("dedicacion");
        habilidades[10].classList.add("gmejorar");
        habilidades[11].classList.add("comunicacion");
        habilidades[12].classList.add("trabajoequipo");
        habilidades[13].classList.add("resolproblemas");
        habilidades[14].classList.add("adaptabilidad");
    }
}

//Detecto el scrolling para aplicar la animación de la barra de habilidades
window.onscroll = function () {
    efectoHabilidades();
}