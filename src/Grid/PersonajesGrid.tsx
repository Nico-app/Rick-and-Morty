import PersonajesCard from '../Card/PersonajesCard'
import "./PersonajeGrid.css"
import { useEffect, useState } from 'react'
import { getCharacters } from '../utils/http'
import { Personaje } from '../utils/Types'
import Spinner from '../Spinner/Spinner'

type PersonajesGridProps = {
   personajes: Personaje[];
   setPersonajes: (newPersonajes: Personaje[]) => void;
}

const PersonajesGrid = (props: PersonajesGridProps) => {
   
   const [isLoading, setIsLoading] = useState(true)
   const getPersonajes = async() => {
     const data = await getCharacters()
     props.setPersonajes(data.results)
   }
   useEffect(() => {
      setIsLoading(true)
      getPersonajes();
      setIsLoading(false)
   }, []);

   if (isLoading) {
      return <Spinner/>
   }

    return (
         <ul className="personajeGrid">
          {props.personajes.map( ({id, name, image}) => <PersonajesCard  name={name} image={image} id={id} key={id} /> )}
         </ul>
        );
}

export default PersonajesGrid