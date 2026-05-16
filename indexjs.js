        // Esperar a que cargue todo el HTML
        document.addEventListener('DOMContentLoaded', function() {
            const modal = document.getElementById('miModal');
            const botonCerrar = document.getElementById('cerrarModal');

            // Mostrar el modal automáticamente al cargar
            modal.classList.add('active');

            // Cerrar el modal al hacer clic en el botón
            botonCerrar.addEventListener('click', function() {
                modal.classList.remove('active');
            });

            // Opcional: cerrar si se hace clic fuera de la ventana (en el overlay)
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    modal.classList.remove('active');
                }
            });
        });