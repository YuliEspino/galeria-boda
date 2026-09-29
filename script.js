const selectorFotos = document.getElementById("selectorFotos");
const seccionSeleccionadas = document.getElementById("seccionSeleccionadas");
const vistaPrevia = document.getElementById("vistaPrevia");
const botonSubir = document.getElementById("botonSubir");

let fotosSeleccionadas = [];

selectorFotos.addEventListener("change", function (event) {

    fotosSeleccionadas = Array.from(event.target.files);

    vistaPrevia.innerHTML = "";

    if (fotosSeleccionadas.length === 0) {
        seccionSeleccionadas.style.display = "none";
        return;
    }

    seccionSeleccionadas.style.display = "block";

    fotosSeleccionadas.forEach(function (foto) {

        const lector = new FileReader();

        lector.onload = function (e) {

            const imagen = document.createElement("img");

            imagen.src = e.target.result;

            vistaPrevia.appendChild(imagen);
        };

        lector.readAsDataURL(foto);
    });

    seccionSeleccionadas.scrollIntoView({
        behavior: "smooth"
    });
});


botonSubir.addEventListener("click", function () {

    if (fotosSeleccionadas.length === 0) {
        alert("Selecciona al menos una fotografía.");
        return;
    }

    alert(
        "¡Perfecto! Has seleccionado " +
        fotosSeleccionadas.length +
        " fotografía(s). ❤️"
    );

});
