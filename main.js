document.addEventListener('DOMContentLoaded', () => {
    const estudiantes = [];
    const resultadosDiv = document.getElementById('resultados');
    const resultadoEstudianteDiv = document.getElementById('resultadoEstudiante');

    document.getElementById('agregar').addEventListener('click', () => {
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const nota1 = parseFloat(document.getElementById('nota1').value);
        const nota2 = parseFloat(document.getElementById('nota2').value);
        const nota3 = parseFloat(document.getElementById('nota3').value);

        if (nombre && apellido && !isNaN(nota1) && !isNaN(nota2) && !isNaN(nota3)) {
            const promedio = (nota1 + nota2 + nota3) / 3;
            estudiantes.push({ nombre, apellido, notas: [nota1, nota2, nota3], promedio });
            guardarEnLocalStorage(estudiantes);
            limpiarFormulario();
        } else {
            alert('Ingresa todos los campos correctamente');
        }
    });

    document.getElementById('buscarEstudiante').addEventListener('click', () => {
        const apellidoABuscar = document.getElementById('buscar').value;
        const resultado = estudiantes.find(estudiante => estudiante.apellido === apellidoABuscar);

        if (resultado) {
            resultadosDiv.innerHTML = `
                <p>Nombre: ${resultado.nombre} ${resultado.apellido}</p>
                <p>Notas: ${resultado.notas.join(', ')}</p>
                <p>Promedio: ${resultado.promedio}</p>
            `;
            resultadoEstudianteDiv.style.display = 'block';
        } else {
            resultadosDiv.innerHTML = 'Estudiante no encontrado';
            resultadoEstudianteDiv.style.display = 'none';
        }
    });

    function guardarEnLocalStorage(estudiantes) {
        localStorage.setItem('estudiantes', JSON.stringify(estudiantes));
    }

    function limpiarFormulario() {
        document.getElementById('nombre').value = '';
        document.getElementById('apellido').value = '';
        document.getElementById('nota1').value = '';
        document.getElementById('nota2').value = '';
        document.getElementById('nota3').value = '';
    }

    const estudiantesGuardados = JSON.parse(localStorage.getItem('estudiantes')) || [];
    estudiantes.push(...estudiantesGuardados);
});