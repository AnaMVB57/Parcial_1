//Creacion de servicios

function crearServicio ({titulo,descripcion}) {
    return`
       <div class="s2-cont2">
            <h3>${titulo}</h3>
            <p>${descripcion}</p>
    
       </div>
    `;
    }
    
    const secciones= [
            {titulo: "Eventos y competencias especiales", descripcion: "Ofrecerán una amplia variedad de productos de chocolate y golosinas únicas, como las barras de chocolate de la fábrica, chicles que nunca pierden su sabor y caramelos con sorpresas en su interior"},
            {titulo: "Sección dos", descripcion: "Descripción de la sección dos"},
            {titulo: "Sección tres", descripcion: "Descripción de la sección tres"},
            {titulo: "Sección cuatro", descripcion: "Descripción de la sección cuatro"},
            {titulo: "Sección cinco", descripcion: "Descripción de la sección cinco"},
            {titulo: "Sección seis", descripcion: "Descripción de la sección seis"},
            {titulo: "Sección siete", descripcion: "Descripción de la sección siete"},
    ];

    
    const contenedor = document.querySelector('.cont-principal');
    
    for (seccion of secciones){
        const servicioHtml= crearServicio(seccion);
        contenedor.insertAdjacentHTML('beforeend', servicioHtml);
        
    }