const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

const btnInicio = document.getElementById("btn-inicio");
const btnEspecialidades = document.getElementById("btn-especialidades");
const btnContacto = document.getElementById("btn-contacto");

const inicio = document.getElementById("inicio");
const especialidades = document.getElementById("especialidades");
const contacto = document.getElementById("contacto");
const informatica = document.getElementById("informatica");
const quimica = document.getElementById("quimica");

toggle.addEventListener("click", () => {

    menu.classList.toggle("active");

});


function ocultarSecciones() {

    inicio.style.display = "none";
    especialidades.style.display = "none";
    contacto.style.display = "none";
    informatica.style.display = "none";
    quimica.style.display = "none";
}


btnInicio.addEventListener("click", (e) => {

    e.preventDefault();

    ocultarSecciones();

    inicio.style.display = "block";

    menu.classList.remove("active");

});


btnEspecialidades.addEventListener("click", (e) => {

    e.preventDefault();

    ocultarSecciones();

    especialidades.style.display = "block";

    menu.classList.remove("active");

});


btnContacto.addEventListener("click", (e) => {

    e.preventDefault();

    ocultarSecciones();

    contacto.style.display = "block";

    menu.classList.remove("active");

});


const btnObjetivo = document.getElementById("btn-objetivo");
const btnHistoria = document.getElementById("btn-historia");
const btnUbicacion = document.getElementById("btn-ubicacion");

const contenidoObjetivo =
    document.getElementById("contenido-objetivo");

const contenidoHistoria =
    document.getElementById("contenido-historia");

const contenidoUbicacion =
    document.getElementById("contenido-ubicacion");


function ocultarContenidos() {

    contenidoObjetivo.style.display = "none";
    contenidoHistoria.style.display = "none";
    contenidoUbicacion.style.display = "none";

    btnObjetivo.classList.remove("activo");
    btnHistoria.classList.remove("activo");
    btnUbicacion.classList.remove("activo");

}


btnObjetivo.addEventListener("click", () => {

    ocultarContenidos();

    contenidoObjetivo.style.display = "block";

    btnObjetivo.classList.add("activo");

});


btnHistoria.addEventListener("click", () => {

    ocultarContenidos();

    contenidoHistoria.style.display = "block";

    btnHistoria.classList.add("activo");

});


btnUbicacion.addEventListener("click", () => {

    ocultarContenidos();

    contenidoUbicacion.style.display = "block";

    btnUbicacion.classList.add("activo");

});


const btnInformatica =
    document.getElementById("btn-informatica");

const volverEspecialidades =
    document.getElementById("volver-especialidades");


btnInformatica.addEventListener("click", () => {

    ocultarSecciones();

    informatica.style.display = "block";

    menu.classList.remove("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

const btnQuimica =
    document.getElementById("btn-quimica");

const volverEspecialidadesquimica =
    document.getElementById("volver-especialidades");

btnQuimica.addEventListener("click", () => {

    ocultarSecciones(); 

    quimica.style.display = "block";

    menu.classList.remove("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


volverEspecialidades.addEventListener("click", () => {

    ocultarSecciones();

    especialidades.style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});