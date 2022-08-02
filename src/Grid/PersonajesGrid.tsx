import { useEffect, useState } from "react";
import PersonajesCard from "../Card/PersonajesCard";
import { PaginationInfo } from "../LandingPage";
import Pagination from "../Pagination";
import Spinner from "../Spinner/Spinner";
import { fetchCharacters, fetchNewPage } from "../utils/http";
import { Personaje, Search } from "../utils/Types";
import "./PersonajeGrid.css";

const PersonajesGrid = ({ search }: { search?: Search }) => {
  const [personajes, setPersonajes] = useState<Personaje[]>([]);
  const [info, setInfo] = useState<PaginationInfo>();
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const getNexPage = async (url: string) => {
    const data = await fetchNewPage(url);
    setPersonajes(data.results);
    setInfo(data.info);
  };

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const data = await fetchCharacters();
        setPersonajes(data.results);
        setInfo(data.info);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    })();
  }, []);

  useEffect(() => {
    if (!search) {
      return;
    }

    const filterPath = new URLSearchParams();
    if (search.name) {
      filterPath.set("name", search.name);
    }
    if (search.gender) {
      filterPath.set("gender", search.gender);
    }

    if (search.status) {
      filterPath.set("status", search.status);
    }
    console.log("filterPath", filterPath);
    console.log("filterPath string", filterPath.toString());

    try {
      fetchCharacters(filterPath.toString()).then((data) => {
        setPersonajes(data.results);
        setInfo(data.info);
      });
    } catch (error) {
      console.log(error);
    }
  }, [search]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    if (info?.next) {
      var url = new URL(info?.next);
      var params = new URLSearchParams(url.search);
      const nextPage = params.get("page");

      if (nextPage) {
        const numericPage = parseInt(nextPage) - 1;
        setCurrentPage(numericPage);
      }
    }
  }, [info?.next]);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <ul className="personajeGrid">
        {personajes.map(({ id, name, image }) => (
          <PersonajesCard name={name} image={image} id={id} key={id + name} />
        ))}
      </ul>
      {info && <Pagination info={info} onChange={getNexPage} currentPage={currentPage} />}
    </>
  );
};

export default PersonajesGrid;
