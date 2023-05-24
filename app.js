function abrirVentanaEmergente(contenidoHTML) {
    var ventanaEmergente = window.open('', 'Receta', 'width=400,height=300');
    ventanaEmergente.document.write(contenidoHTML);
    return false;
}

function mostrarIngredientes(nombreReceta, ingredientes) {
    var contenidoHTML = `
        <html>
        <head>
            <title>Ingredientes de ${nombreReceta}</title>
        </head>
        <body>
        <style>
        body {
            background-color:  rgb(250, 255, 181);
        }
        h1 {
            color: Black; 
        }
        h2 {
            font-size: 18px;
        
        p {
            font-style: italic;
        }
    </style>
            <h1>${nombreReceta}</h1>
            <h2>Ingredientes:<br> </h2>
            <p>${ingredientes}</p>
        </body>
        </html>
    `;
    
    abrirVentanaEmergente(contenidoHTML);
}