//Creacion de los colaboradores

function crearColab ({imgUrl,titulo,descripcion}) {
    return`
       <div class="colab">
            <div class="circulo">
                <img src=${imgUrl}></img>
            </div>
        <h1>${titulo}</h1>
        <p>${descripcion}</p>
       </div>
    `;
    }
    
    // Creación del contenido de los colaboradores de la sección 2
    const secciones= [
            {imgUrl: "images/oompa-loompa.jpg", titulo: "Oompa Loompas", descripcion: "Operadores del equipo de la fábrica"},
            {imgUrl: "images/willy-wonka.jpg", titulo: "Willy Wonka", descripcion: "Dueño de la fábrica"},
            {imgUrl: "images/charlie.jpg", titulo: "Charlie Bucket", descripcion: "Heredero de la fábrica"}            
        ];

    const contenedor = document.querySelector('.s3-colaboradores');
    
function mostrarColaboradores(){
    for (let colab of secciones){
        const servicioHtml= crearColab(colab);
        contenedor.insertAdjacentHTML('beforeend', servicioHtml);
    }
}
    export {mostrarColaboradores};