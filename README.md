# Parcial_1

Repositorio del parcial 1

Primer examen de Lenguajes de programación II
Landing Page
Un cliente que presta servicios (de lo que ustedes deseen) los ha contratado para
que desarrollen una página web con los siguientes requisitos:
1. Head:
● Favicon.
<link rel="icon" type="image/x-icon" href="RUTA DE LA IMAGEN AQUI">
● Título.
<title>TÍTULO AQUÍ</title>
● Descripción.
<meta name="description" content="DESCRIPCIÓN AQUÍ">
● Tipo de charset (UTF-8).
<meta charset="UTF-8">
● Link al archivo CSS.
<link rel="stylesheet" href="RUTA DEL ARCHIVO CSS AQUÍ">
2. Body:
● Se debe seguir la estructura que se muestra en el archivo
mockup.pdf. La página debe contener los elementos del mockup
como mínimo, pero si quieren agregar más, son libres de hacerlo.
● Los botones que se encuentran en el header y el footer deben cambiar
el color de la letra (si la tienen), el color del fondo y añadir una sombra
cuando el mouse se pase por encima. (Esto se logra a través de la
pseudo clase :hover).
● El botón de Whatsapp debe quedar fijo en la pantalla en la posición
que se indica. (Esto se logra a través de la propiedad position con el
valor fixed, y se debe indicar las coordenadas con las propiedades
bottom y right). Además, debe direccionar a https://wa.me/1234 en
una nueva pestaña.
● Como se indica en el archivo de mockup, las secciones deben tener un
tamaño de 100vh cómo height y 100vw cómo width.
● Las imágenes en forma de nube pueden tener la forma que ustedes
deseen.
● El font-size y el font-weight para los textos puede ser el que ustedes
deseen, la idea es que el texto quede legible.
● El tamaño de los borders, el padding y el margin es libre.
● Todas las imágenes que se utilicen deben estar dentro del proyecto, es
decir, no usar links.
Tips:
● Las unidades que se deberían usar para cada caso son:
○ Width / Height: %, vw/vh o rem.
○ Margin / Padding: rem o em.
○ Borders / Shadows: px (valores pequeños), rem o em.
○ Font-Size: rem o em.
○ Colors: keywords (blue, white, yellow, etc), Hex RGB
(#XXXXXX), rgb(), rgba().
● Reiniciar el padding y el margin por defecto de todos los elementos
con:
* {
padding: 0;
margin: 0;
box-sizing: border-box;
}
Dado que cada navegador tiene diferentes configuraciones CSS por
defecto para cada etiqueta, con esto se evitaría que la página web
sufra cambios de padding o margin dependiendo del navegador. Por
otro lado, el border-box ayuda a que el cálculo del height y el width
tenga en cuenta el valor del borde y del padding.
● Declarar variables en la pseudo clase root.
:root {
–color-principal: blue;
}
Estas variables se pueden usar como valor en las propiedades CSS a
través de la función var().
● No utilizar el atributo style de las etiquetas HTML para poner los
estilos. La mejor opción es a través de los selectores y/o el atributo
class.
● El display flex es una muy buena opción para cuando se requiere un
contenedor que tenga varios elementos dentro, dado que permite
acomodarlos de forma sencilla.
Para tener en cuenta:
● Este es un trabajo individual, por tanto, proyectos iguales se considerarán
como copia y la nota se dividiría entre los implicados.
● El proyecto se debe subir a un repositorio público en GitHub y se debe
enviar el link al correo sebastian.alarcon@uniremington.edu.co. No se
recibirá ningún tipo de archivo adjunto.
● El plazo máximo de entrega es antes de que termine el día viernes 15 de
Septiembre de 2023, es decir, después de las 11:59:59 pm del viernes no
se reciben más exámenes.
