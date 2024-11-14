function letra(song) {
    // Mostrar el modal y el overlay
    document.getElementById("modal").style.display = "block";
    document.getElementById("modal-overlay").style.display = "block";

    fetch(`https://api.lyrics.ovh/v1/Childish Gambino/${song}`)
        .then(response => response.json())
        .then(data => {
            if (data.lyrics) {
                // Si se encuentra la letra, mostrarla 
                document.getElementById("modal-title").innerText = song;
                document.getElementById("modal-text").innerText = data.lyrics;
            } else {
                // Si no se encuentra, mostrar un mensaje de error
                document.getElementById("modal-text").innerText = `No se ha encontrado la letra de "${song}"`;
            }
        })
        .catch(error => {
            // En caso de error, mostrar un mensaje de error
            console.error('Error:', error);
            document.getElementById("modal-text").innerText = `No se ha encontrado la letra de "${song}"`;
        });
}

// Cerrar el modal cuando el usuario hace clic en el botón de cerrar
document.getElementById("close-modal").onclick = function() {
    document.getElementById("modal").style.display = "none";
    document.getElementById("modal-overlay").style.display = "none";
}

// Cerrar el modal si el usuario hace clic fuera del contenido del modal
document.getElementById("modal-overlay").onclick = function() {
    document.getElementById("modal").style.display = "none";
    document.getElementById("modal-overlay").style.display = "none";
}
