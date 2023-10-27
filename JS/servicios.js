//Creacion de servicios

function crearServicio ({titulo,descripcion}) {
    return`
       <div class="servicio">
            <h1>${titulo}</h1>
            <p>${descripcion}</p>
       </div>
    `;
    }
    
    // Creación del contenido de las secciones de la sección 2
    const secciones= [
            {titulo: "Tours de la fábrica", descripcion: "Ofrecemos recorridos especiales por la fábrica donde los visitantes podrían experimentar la magia y la maravilla de la fabricación de chocolate, como la sala de chocolate comestible y el Wonkavator que se mueve en todas las direcciones."},
            {titulo: "Venta de productos de chocolate únicos", descripcion: "Organizamos eventos especiales, como la búsqueda de los boletos dorados en las barras de chocolate, donde los ganadores tendrán la oportunidad de visitar la fábrica y participar en aventuras emocionantes."},
            {titulo: "Eventos y competencias especiales", descripcion: "Ofrecerán una amplia variedad de productos de chocolate y golosinas únicas, como las barras de chocolate de la fábrica, chicles que nunca pierden su sabor y caramelos con sorpresas en su interior"},
            {titulo: "Suscripciones mensuales de dulces misteriosos", descripcion: "Los clientes podrán suscribirse a un servicio mensual en el que recibirán cajas de chocolates y golosinas sorpresa directamente de la fábrica, con productos exclusivos y ediciones limitadas."},
            {titulo: "Catas de chocolate personalizadas", descripcion: "Ofrecerán una amplia variedad de productos de chocolate y golosinas únicas, como las barras de chocolate de la fábrica, chicles que nunca pierden su sabor y caramelos con sorpresas en su interior."},
            {titulo: "Productos de regalo temáticos", descripcion: "Creamos productos de regalo temáticos basados en la historia, como cajas de chocolates con diseños inspirados en los personajes de la fábrica de chocolate y sets de regalo con elementos mágicos y sorprendentes."},
    ];

    const contenedor = document.querySelector('.s2-servicios');
    
function mostrarContenido(){    
    for (let servicio of secciones){
        const servicioHtml= crearServicio(servicio);
        contenedor.insertAdjacentHTML('beforeend', servicioHtml);
        console.log(servicioHtml);
    }
}

export {mostrarContenido};