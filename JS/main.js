//Importamos los métodos que se ejecutarán en la página de los archivos 

import { mostrarContenido } from "./servicios.js";
import { mostrarColaboradores } from "./colaboradores.js";
import { abrirModal } from "./modal.js";
 
//Importamos el método de servicios.js para mostrar los servicios de la sección 2

mostrarContenido();

//Importamos el método de colaboradores.js para mostrar los colaboradores de la sección 3

mostrarColaboradores();


abrirModal();