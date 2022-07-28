import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PersonajesCard from "../Card/PersonajesCard";
import { PaginationInfo } from "../LandingPage";
import Pagination from "../Pagination";
import Spinner from "../Spinner/Spinner";
import { fetchCharacters } from "../utils/http";
import { Personaje } from "../utils/Types";
import "./PersonajeGrid.css";

type PersonajesGridProps = {
  personajes: Personaje[];
  setPersonajes: (newPersonajes: Personaje[]) => void;
  setPaginationInfo: (vevo: PaginationInfo) => void;
  paginationInfo?: PaginationInfo;
};

const PersonajesGrid = (props: PersonajesGridProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const getPersonajes = async (url?: string) => {
    const data = await fetchCharacters(url);
    props.setPersonajes(data.results);
    props.setPaginationInfo(data.info);
  };

  useEffect(() => {
    setIsLoading(true);
    getPersonajes();
    setIsLoading(false);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    if (props.paginationInfo?.next) {
      var url = new URL(props.paginationInfo?.next);
      var params = new URLSearchParams(url.search);
      const nextPage = params.get("page");

      if (nextPage) {
        const numericPage = parseInt(nextPage) - 1;
        setCurrentPage(numericPage);
      }
    }
  }, [props.paginationInfo?.next]);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <ul className="personajeGrid">
        {props.personajes.map(({ id, name, image }) => (
          <PersonajesCard name={name} image={image} id={id} key={id + name} />
        ))}
      </ul>
      {props.paginationInfo && (
        <Pagination
          info={props.paginationInfo}
          onChange={getPersonajes}
          currentPage={currentPage}
        />
      )}
    </>
  );
};

export default PersonajesGrid;
