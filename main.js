document.addEventListener("DOMContentLoaded", function() {
    class Persona {
        constructor(nombre, apellidos, edad) {
            this.nombre = nombre;
            this.apellidos = apellidos;
            this.edad = edad;
        }
    }

    const personas = [];

    function agregarPersona() {
        for (let i = 0; i < 5; i++) {
            const nombre = prompt("Ingrese el nombre:");
            const apellidos = prompt("Ingrese los apellidos:");
            const edad = parseInt(prompt("Ingrese la edad:"));
            
            const persona = new Persona(nombre, apellidos, edad);
            personas.push(persona);
        }
        
        alert("Personas añadidas exitosamente.");
    }

    function mostrarPersonas() {
        const listaPersonas = document.getElementById("lista-personas");
        listaPersonas.innerHTML = "";
        
        personas.forEach(persona => {
            const item = document.createElement("li");
            item.textContent = `Nombre: ${persona.nombre}, Apellidos: ${persona.apellidos}, Edad: ${persona.edad}`;
            listaPersonas.appendChild(item);
        });
    }

    const botonAgregar = document.getElementById("agregar");
    botonAgregar.addEventListener("click", agregarPersona);

    const botonMostrar = document.getElementById("mostrar");
    botonMostrar.addEventListener("click", mostrarPersonas);
});
