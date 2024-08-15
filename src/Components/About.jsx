import React from 'react';
import './About.css';

function About() {
    return (
        <div className="about-container">
            <h2>Conoce a Astrid:</h2>
            <img className="imagenEspacio" src="AstridEspacio.png" alt="Astrid en el espacio" />
            <p className = "subtitle" >Comunicóloga y desarrolladora Front-end</p>
            <p className="presentación">
                ¡Bienvenidos a mi proyecto! Soy Astrid Itzel, una apasionada comunicóloga y desarrolladora front-end que une su amor por la tecnología y el espacio en esta página. Aquí, podrás disfrutar de la imagen diaria de la NASA APOD y conocer a las y los valientes astronautas que se encuentran en el espacio gracias al uso de APIs. 
                
                ¡Disfruten de este viaje cósmico al universo!

            </p>
        </div>
    );
}

export default About;