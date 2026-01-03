const ApiKey = "AIzaSyAQTBog49mRsBhIUdy8Et-7PPiJyMIm2PA";
const client_key= "my_test_app"

const termino = document.querySelector(".termino");
const buscar = document.querySelector(".buscar");
const resultados = document.querySelector(".resultados")


buscar.addEventListener ("click", () => {
    resultados.innerHTML = "";
    const url =`https://tenor.googleapis.com/v2/search?q=${termino.value}&key=${ApiKey}&client_key=my_test_app&limit=9`
    const peticion = fetch(url)

    peticion
        .then((response) => {
            return (response.json());

        })
        .then((response) => {
            response.results.forEach(element => {
                const gifContainer = document.createElement("div");
                gifContainer.classList.add("gif-container");

                const urlImg = element.media_formats.gif.url;
                const img = document.createElement("Img");
                img.src = urlImg;

                const previewLink = document.createElement("a");
                previewLink.href = urlImg;
                previewLink.textContent = "Vista previa";
                previewLink.target = "_blank";
                previewLink.classList.add("preview-link");

                img.addEventListener("click", () => {
                    previewLink.classList.toggle("visible");
                });

                gifContainer.appendChild(img);
                gifContainer.appendChild(previewLink);
                resultados.appendChild(gifContainer);
                
            })
            console.log(response)
        })
});