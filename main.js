function saludar() {
alert("¡Bienvenidos a la biblioteca interactiva!");
}

function elegirlibro() {
libro = prompt("Elija uno de nuestros libros:\n1. Caperucita Roja\n2. Los Tres Cerditos\n3. El Patito Feo").toLowerCase();
    
if (libro === "1" || libro === "caperucita roja") {
    alert("Elegiste Caperucita Roja. ¡Una historia clásica!");
    libro = "Caperucita Roja";
} else if (libro === "2" || libro === "los tres cerditos") {
    alert("Elegiste Los Tres Cerditos. ¡Una historia llena de astucia!");
    libro = "Los Tres Cerditos";
} else if (libro === "3" || libro === "el patito feo") {
    alert("Elegiste El Patito Feo. ¡Una historia de transformación!");
    libro = "El Patito Feo";
} else {
    alert("No tenemos ese libro.");
    libro = null;
}
}

function biblioteca() {
    alert("Tenemos disponibles:\n1. Caperucita Roja\n2. Los Tres Cerditos\n3. El Patito Feo");
}

function leerlibro() {
if (libro) {
    alert(`Disfruta de la lectura de ${libro}!`);
} else {
    alert("Primero elige un libro.");
}
}

let libro;
let opcion;

saludar();

while (true) {
opcion = prompt("Elija qué quiere hacer:\n1. Elegir un libro\n2. Ver la biblioteca\n3. Leer libro");

if (opcion === "1") {
    elegirlibro();
} else if (opcion === "2") {
    biblioteca();
} else if (opcion === "3") {
    leerlibro();
break; // Salir del bucle después de leer el libro
} else {
    alert("Opción no válida, por favor elija nuevamente.");
}
}
