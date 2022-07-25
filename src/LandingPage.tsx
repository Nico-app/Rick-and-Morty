import PersonajesGrid from "./Grid/PersonajesGrid";
import Search  from "./Search/Search";
import { Personaje } from './utils/Types'
import { useEffect, useState } from 'react'

export function LandingPage() {
    const [personajes, setPersonajes] = useState<Personaje[]>([]);
    return (
        <div>
            <Search  setPersonajesVe={setPersonajes}/>
            <PersonajesGrid personajes={personajes} setPersonajes={setPersonajes}/>
        </div>
    )
    
    
}