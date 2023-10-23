/** 
 * Galeria que mostrara varias fotografias
 * debera ser asincronamente
 */

const rutaImagenes = [
    {
        id:1,
        nombre:"imagen1",
        scr:"https://www.hogarmania.com/archivos/201412/razas-perros-nordicos-samoyedo-XxXx80.jpg"
    },
    {
        id:2,
        nombre:"imagen2",
        scr:"https://www.hogarmania.com/archivos/201412/razas-perros-nordicos-samoyedo-XxXx80.jpg"
    },
    {
        id:3,
        nombre:"imagen3",
        scr:"https://www.hogarmania.com/archivos/201412/razas-perros-nordicos-samoyedo-XxXx80.jpg"
    },
    {
        id:4,
        nombre:"imagen4",
        scr:"https://www.hogarmania.com/archivos/201412/razas-perros-nordicos-samoyedo-XxXx80.jpg"
    }
];

const promesas = [];
for(const img of rutaImagenes){
    promesas.push(fetch(img.src));
}

Promise.all(promesas).then(respuestas=> {
    Promise.all(respuestas.map(respuesta=> respuesta.blob()))
    .then(blobs=>{
        //const fragmento = document.createDocumentFragment();
        for(const blob of blobs){
            const imgURL = URL.createObjectURL(blob);
           // const imgHTML = document.createElement('img');
           // imgHTML.src = imgURL;
            //fragmento.appendChild(imgHTML);
            console.log(imgURL);
        }
    }).then( () => {});
});