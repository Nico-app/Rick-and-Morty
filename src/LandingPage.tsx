import { useState } from "react";
import PersonajesGrid from "./Grid/PersonajesGrid";
import Search from "./Search/Search";
import { Personaje } from "./utils/Types";

export type PaginationInfo = {
  next: string;
  prev?: string;
};

const LandingPage = () => {
  const [personajes, setPersonajes] = useState<Personaje[]>([]);
  const [info, setInfo] = useState<PaginationInfo>();

  return (
    <div>
      <Search setPersonajesVe={setPersonajes} setPaginationInfo={setInfo} />
      <PersonajesGrid
        personajes={personajes}
        setPersonajes={setPersonajes}
        paginationInfo={info}
        setPaginationInfo={setInfo}
      />
    </div>
  );
};

export default LandingPage;
