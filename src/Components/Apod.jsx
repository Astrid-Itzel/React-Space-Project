import { useEffect, useState } from "react";
import "./Apod.css";
import Progress from './Progress.jsx';

const APOD_api = 'https://api.nasa.gov/planetary/apod?api_key=oVUerSKnxR6pRhWfkj3U13B4D744i4IdcQ9ty8dt';


function Apod () {
    const [isLoading, setIsLoading] = useState(true);
    const [imageData, setImageData] = useState(null);

    useEffect(() =>{
        fetch(APOD_api)
        .then((response) => response.json())
        .then((resultado) => {
            setImageData (resultado);//Guardar datos
            setIsLoading(false); //Desactivar modo "cargando"
        });
    }, []);//* El segundo argumento de useEffect es un arreglo vacío ([]) porque la idea es ejecutar el efecto (llamada a la API) una sola vez (luego del primer renderizado). Si omitimos esto, cada vez que se renderice el componente se volverá a ejecutar el useEffect.

    if (isLoading) { //si está cargando, mostramos texto que lo indique
        return (
        <div className="Apod">
             <Progress/>
        </div>
        );
    }

    if (!imageData) {
        return (
            <div className="Apod">
                <h1>Error</h1>
            </div>
        );
    }

    return (
    <div className="Apod-info">
        <h2 className='apod--title'>{imageData.title}</h2>
        <div>
            <img className="ImagenDelDía" src={imageData.url} alt="Foto del día de la NASA"/>
        </div>
        <p className='Apod--explanation'>{imageData.explanation}
        </p>

    </div>
  );
}


export default Apod;
