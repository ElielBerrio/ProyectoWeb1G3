function crearElemento(nombreTag) {

    return document.createElement(nombreTag);

}

function crearElementoConTexto(nombreTag, textoTag) {

    var elemento = crearElemento(nombreTag);
    var elementoTexto = document.createTextNode(textoTag);
    elemento.appendChild(elementoTexto);
    return elemento;
    
}

function crearImagen(urlImagen) {

    var img = crearElemento("img");
    img.src = urlImagen;
    return img;

}

function adicionarHijo(padre, hijo) {

    padre.appendChild(hijo);
    
    
}

function adicionarBody(elemento) {
    document.body.appendChild(elemento);
}