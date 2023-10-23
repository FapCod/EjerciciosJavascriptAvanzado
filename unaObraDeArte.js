/*
Crear una clase que almacera atributos de una imagen
debe tener un metodo que cargue y muestre la imagen.
*/
const rutaImagen = 'https://www.hogarmania.com/archivos/201412/razas-perros-nordicos-samoyedo-XxXx80.jpg';
class Imagen {
    _ruta;
    constructor(ruta) {
        this._ruta = ruta;
    }
    cargar() {
        //const img = document.createElement('img');
        //img.src = this._ruta;
        //document.body.appendChild(img);
        console.log('Cargando imagen...');
        console.log(this._ruta);
    }
}

const imagen = new Imagen(rutaImagen);
imagen.cargar();