// Función para cargar una página con AJAX
function loadPage(pageUrl) {
    fetch(pageUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la solicitud: ' + response.status);
            }
            return response.text();
        })
        .then(html => {
            document.getElementById('contentContainer').innerHTML = html;
        })
        .catch(error => {
            console.error('Hubo un problema al cargar la página:', error);
        });
}

// Agregar eventos a los botones
document.getElementById('pagina1').addEventListener('click', function() {
    loadPage('page1.html');
});

document.getElementById('pagina2').addEventListener('click', function() {
    loadPage('page2.html');
});

document.getElementById('pagina3').addEventListener('click', function() {
    loadPage('page3.html');
});

document.getElementById('pagina4').addEventListener('click', function() {
    loadPage('page4.html');
});

// Cargar page1.html al cargar la página
window.addEventListener('DOMContentLoaded', function() {
    loadPage('page1.html');
});
