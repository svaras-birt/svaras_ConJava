// Función de validación de formulario

const form = document.getElementById("formulario");
if (form) {
  form.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const nombre = document.getElementById("nombre").value;
    if (nombre.length === 0) {
      alert("El nombre no puede estar vacío");
      return;
    };

    const pais = document.getElementById("pais").value;
    if (pais.length === 0) {
      alert("No nos has preguntado por ningún país concreto");
      return;
    };

    this.submit();
  });
};


// Función para mostrar información extra de Azores

function mostrarInfoAzores() {
  const div = document.getElementById('info-azores');
  if (div) {
    div.innerHTML =
      '<p>Salvo que vayas más de una semana te recomendamos disfrutar solo de Sao Miguel. Tiene rutas y paisajes para perderse sin duda durante 7 días. Y unas bonitas playas si tienes suerte con el tiempo.</p>'+
      '<img src="imagenes/azores3.jpg" width="300">';
  };
};


// Galería interactiva de Mallorca

function galeriaMallorca() {
  const div = document.getElementById('galeria-mallorca');
  if (div) {
    div.innerHTML = 
      '<img src="imagenes/mallorca3.jpg" width="150" onclick="mostrarGrande(\'mallorca3\')">' +
      '<img src="imagenes/mallorca4.jpg" width="150" onclick="mostrarGrande(\'mallorca4\')">' +
      '<img src="imagenes/mallorca5.jpg" width="150" onclick="mostrarGrande(\'mallorca5\')">' +
      '<div id="grande"></div>';
  };
};

function mostrarGrande(imagen) {
  var div = document.getElementById('grande');
  if (div) {
    div.innerHTML = '<img src="imagenes/' + imagen + '.jpg" width="400">';
  };
};


// Curiosidades de Milán

function mostrarCuriosidadMilan() {
  const curiosidades = [
    "El Duomo de Milán tardó casi 600 años en construirse.",
    "En Milán se encuentra 'La Última Cena' de Leonardo da Vinci.",
    "La Galleria Vittorio Emanuele II es uno de los centros comerciales más antiguos del mundo.",
    "El Teatro alla Scala de Milán es uno de los teatros de ópera con mejor acústica del planeta.",
    "Milán fue la primera ciudad de Italia en tener un sistema de metro."
  ];

  const indice = Math.floor(Math.random() * curiosidades.length);
  document.getElementById("curiosidad-milan").innerText = curiosidades[indice];
};


// Contador de likes para Vietnam

function contadorVietnam() {
  const span = document.getElementById('vietnam-likes');
  if (span) {
    let likes = parseInt(localStorage.getItem('vietnam-likes')) || 0;
    likes++;
    localStorage.setItem('vietnam-likes', likes);
    span.innerText = likes;
  };
};
