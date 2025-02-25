// Cuando se abra el modal, rellenamos el campo “Producto” automáticamente
const consultaModal = document.getElementById('consultaModal');
consultaModal.addEventListener('show.bs.modal', function (event) {
    let button = event.relatedTarget; // Botón que abrió el modal
    let producto = button.getAttribute('data-producto');
    document.getElementById('productoConsulta').value = producto;
});

// Manejo del envío del formulario
$('#formConsulta').submit(function (e) {
    e.preventDefault(); // Evita el submit normal
    let nombre = $('#nombreCliente').val();
    let email = $('#emailCliente').val();
    if (!nombre || !email) {
        alert('Por favor, rellena los campos obligatorios.');
    } else {
        alert('¡Consulta enviada con éxito!');
        // Cierra el modal
        let modalElement = bootstrap.Modal.getInstance(document.getElementById('consultaModal'));
        modalElement.hide();
        // Limpia el formulario
        $(this)[0].reset();
    }
});
