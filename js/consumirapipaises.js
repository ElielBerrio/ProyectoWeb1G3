function consumirApi() {

    var url = "https://restcountries.com/v3.1/independent?status=true";

    fetch(url)
        .then(Response => Response.json())
        .then(json => {

            var tablaPaises = document.getElementById("tablaPaises");

            for (item of json) {

                var fila = tablaPaises.insertRow();

                var columnaNombrePais = fila.insertCell(0);
                var columnaNombreOficial = fila.insertCell(1);
                var columnaCapital = fila.insertCell(2);
                var columnaMoneda = fila.insertCell(3);
                var columnaIdiomas = fila.insertCell(4);
                var columnaBandera = fila.insertCell(5);
                var columnaEscudoArmas = fila.insertCell(6);
                var columnaPoblacion = fila.insertCell(7);


                columnaNombrePais.innerHTML = item.name.common;
                columnaNombreOficial.innerHTML = item.name.official;
                columnaCapital.innerHTML = item.capital;

                var currencies = item.currencies;
                var keys = Object.keys(currencies);
                for (key of keys) {
                    columnaMoneda.innerHTML = currencies[key].name;
                }

                var languages = item.languages;
                var keys = Object.keys(languages);
                for (key of keys) {
                    columnaIdiomas.innerHTML = languages[key].spa;
                }

                var urlImagen = item.thumbnail.path + "." + item.thumbnail.extension;
                var imagen = crearImagen(urlImagen);
                columnaBandera.appendChild(imagen);





            }

        })
}