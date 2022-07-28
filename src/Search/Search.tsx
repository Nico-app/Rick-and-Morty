import "./Search.css";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { getFilterCharacters } from "../utils/http";
import { Personaje } from "../utils/Types";
import { PaginationInfo } from "../LandingPage";

type SearchProps = {
  setPersonajesVe: (newPersonajes: Personaje[]) => void;
  setPaginationInfo: (vevo: PaginationInfo) => void;
};

const Search = ({ setPersonajesVe, setPaginationInfo }: SearchProps) => {
  const [searchText, setSearchText] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    if (!searchText) {
      return;
    }
    e.preventDefault();
    const { info, results } = await getFilterCharacters(searchText);
    setPaginationInfo(info);
    setPersonajesVe(results);
  };

  return (
    <form className="search" onSubmit={(e) => handleSubmit(e)}>
      <div className="searchbox">
        <input
          required
          className="searchInput"
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="searchButton" type="submit">
          <FaSearch size={20} />
        </button>
      </div>
    </form>
  );
};

export default Search;
