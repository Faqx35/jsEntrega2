// arreglo para almacenar los datos de los alumnos
let alumnos = [];

// función para calcular el promedio de un alumno
function calcularPromedio() {
    let nombre = document.getElementById("nombre").value;
    let nota1 = parseFloat(document.getElementById("nota1").value);
    let nota2 = parseFloat(document.getElementById("nota2").value);
    let nota3 = parseFloat(document.getElementById("nota3").value);

    // promedio de las notas
    let promedio = (nota1 + nota2 + nota3) / 3;

    // datos del alumno al arreglo
    alumnos.push({
        nombre: nombre,
        notas: [nota1, nota2, nota3],
        promedio: promedio.toFixed(2)
    });

    // promedio 
    document.getElementById("promedio").textContent = promedio.toFixed(2);

    // limpiar los campos del formulario
    document.getElementById("nombre").value = "";
    document.getElementById("nota1").value = "";
    document.getElementById("nota2").value = "";
    document.getElementById("nota3").value = "";

    // mostrar los datos en la grilla
    mostrarAlumnosEnGrilla();
}

// botón para calcular el promedio
document.getElementById("calcularButton").addEventListener("click", calcularPromedio);

// mostrar los datos de los alumnos en una grilla
function mostrarAlumnosEnGrilla() {
    const alumnosGrid = document.getElementById("alumnosGrid");
    alumnosGrid.innerHTML = ""; // Limpiar la grilla antes de mostrar los datos

    // celdas de la grilla para nombre, notas y promedio
    alumnos.forEach((alumno) => {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        gridItem.innerHTML = `
            <div><strong>Nombre:</strong> ${alumno.nombre}</div>
            <div><strong>Nota 1:</strong> ${alumno.notas[0]}</div>
            <div><strong>Nota 2:</strong> ${alumno.notas[1]}</div>
            <div><strong>Nota 3:</strong> ${alumno.notas[2]}</div>
            <div><strong>Promedio:</strong> ${alumno.promedio}</div>
        `;
        alumnosGrid.appendChild(gridItem);
    });
}
