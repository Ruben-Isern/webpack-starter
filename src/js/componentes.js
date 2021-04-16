
import '../css/componentes.css';

export const saludar = (nombre) =>{         //la palabra export nos permite usar la función llamandola desde fuera de este archivo

    console.log('creando etiqueta h1, en el html');

    const h1 = document.createElement('h1');
    h1.innerText= `Hola ${nombre}`;
    document.body.append(h1);

}