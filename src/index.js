
// con el import podríamos importar funciones, codigo etc creado en otros archivos.
// pues surge la necesidad de tener todo mucho más ordenado que en un solo archivo.

import {saludar} from './js/componentes.js'; // esto nos daría error. por eso utilizaremos webpack.
import './styles.css';


const nombre = 'Ruben';
saludar(nombre);
