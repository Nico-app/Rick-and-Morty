import './PersonajeDetails.css'
import { useParams } from 'react-router-dom';
import { getCharacter } from '../utils/http';
import { useEffect, useState } from 'react';
import { Personaje } from '../utils/Types'
import Spinner from '../Spinner/Spinner';


export function PersonajeDetail() {
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true)
    const [personaje, setPersonaje] = useState<Personaje>()
    const urlpersonaje = async () => {
        const personajeResult = await getCharacter(id!)
        setPersonaje(personajeResult)
    }
   
    useEffect(() => {
        setIsLoading(true)
        urlpersonaje()
        setIsLoading(false)
    }, [])

    if(isLoading) {
        return <Spinner/>
    }

    return (<div className="detailsConteiner">
         <img 
         width={250}
         height={250}
         className="personajeImage" 
         src={personaje?.image} 
         alt={personaje?.name}/>
        <div className="col">
            <p>Nombre: {personaje?.name}</p>
            <p>Genero: {personaje?.gender}</p>
            <p>Especie: {personaje?.species}</p>
        </div>
    </div>);
}