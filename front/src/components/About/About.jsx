import { Link } from 'react-router-dom';
import miFoto from './yo.jpeg'
import style from  './About.module.css'


export default function About() {
    return (
        <>
         <Link to="/home" className={style.home}>
        Back
      </Link>
        <div className={style.about}>
        
        
            <h2 >Yorvis Meléndez</h2>
            <img src={miFoto} alt="Mi foto" />
            <h3 >About me!</h3>
            <p>¡Hola! Soy un estudiante entusiasta de Full Stack Development con un amplio conocimiento en diversas tecnologías web. Mi enfoque principal es convertirme en un experto en el campo, y hasta ahora, he adquirido habilidades valiosas en varias áreas clave.

Como Full Stack Developer, tengo experiencia trabajando con lenguajes y frameworks populares como JavaScript, React, Redux y Node.js. Estoy cómodo tanto en el frontend como en el backend de las aplicaciones web, lo que me permite desarrollar soluciones completas y robustas.

En el lado del frontend, me destaco en el uso de React, Redux y jQuery para crear interfaces de usuario interactivas y altamente funcionales. También tengo experiencia en el uso de Bootstrap para el desarrollo de sitios web receptivos y amigables para dispositivos móviles. Me apasiona crear experiencias de usuario atractivas y optimizadas.

En cuanto al backend, he trabajado con Node.js y Express para desarrollar API RESTful y aplicaciones escalables. Mi conocimiento de bases de datos incluye PostgreSQL y Sequelize, lo que me permite diseñar y administrar eficientemente los datos de las aplicaciones.

Además de mis habilidades técnicas, poseo habilidades blandas que me ayudan a sobresalir en mi trabajo. Soy un aprendiz rápido, capaz de asimilar rápidamente nuevos conceptos y tecnologías. Tengo una sólida ética de trabajo y soy diligente en mi enfoque para alcanzar los objetivos establecidos. Soy un buen comunicador y disfruto colaborar en equipo, ya que creo que el trabajo en equipo fomenta la creatividad y la resolución de problemas de manera eficiente.

En resumen, como Full Stack Developer, mi objetivo es utilizar mi conjunto de habilidades técnicas, experiencia en tecnologías web y habilidades blandas para desarrollar soluciones sólidas y optimizadas. Estoy emocionado de enfrentar nuevos desafíos y aprender continuamente para seguir creciendo en este apasionante campo.</p>
            </div>
           
        </>
        
    );
}