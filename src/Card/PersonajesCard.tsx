import { Link } from "react-router-dom";
import  "./PersonajeCard.css"

type PersonajesProps = {
    id: number;
    name: string;
    image: string;
    
}

 const PersonajesCard = ({name, image, id}: PersonajesProps) => {
    const imgUrl = image;
    
    return (
        <Link to={`/personaje/${id}`} >
        <li className="personajeCard" >
         <img 
         width={300}
         height={300}
         className="personajeImage" 
         src={imgUrl} 
         alt={name}/>
        <div className="cardText">{name}</div>
        
        </li></Link>
        )
}

export default PersonajesCard