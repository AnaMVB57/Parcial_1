//Destructuring

//Creamos el modal que aparecerá al hacer click en "ver más"
function crearModal(){
    return`
        <div class="contenedor-modal">
            <div class="modal">
                <h2>¿Está seguro que desea ver las demás secciones?</h2>
                <button id="button-aceptar">Aceptar</button>
                <button id="button-cancelar">Cancelar</button>
            </div>
        </div>
    `;
}

    const botonVermas = document.getElementById("boton-vermas");

function abrirModal(){
    
    botonVermas.addEventListener('click',() => ejecutarModal());

}

//Llamamos el modal luego de hacer click en el botón "ver más" y mostramos los botones Aceptar y Cancelar
function ejecutarModal(){

    document.body.insertAdjacentHTML('beforeend',crearModal());
    const botonAceptar=document.getElementById("button-aceptar");
    const botonCancelar=document.getElementById("button-cancelar");
    const modal = document.querySelector(".contenedor-modal");

    //Botones Aceptar y Cancelar

                                    //Crear una función que tenga las funciones del botón aceptar
    botonAceptar.addEventListener('click',() => aceptar(modal));

    botonCancelar.addEventListener('click',()=> modal.remove());
}

function aceptar(modal){

    modal.remove()
    const servicios=document.getElementById("s2");
    const colaboradores=document.getElementById("s3");
    const aServicios=document.getElementById("a2");
    const aColab=document.getElementById("a3");
    servicios.classList.remove("ocultar");
    colaboradores.classList.remove("ocultar");
    aServicios.classList.remove("ocultar");
    aColab.classList.remove("ocultar");
    botonVermas.remove();
}

export {abrirModal};