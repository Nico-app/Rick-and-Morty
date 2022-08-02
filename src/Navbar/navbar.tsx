import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Search } from "../utils/Types";
import "./navbar.css";

type NavbarProps = {
  setFilters: (algo: Search) => void;
};

const Navbar = ({ setFilters }: NavbarProps) => {
  const [localSearch, setLocalSearch] = useState<Search>();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    if (!localSearch?.name) {
      return;
    }
    e.preventDefault();
    setFilters(localSearch);
  };

  return (
    <form className="search" onSubmit={(e) => handleSubmit(e)}>
      <div className="searchbox">
        <input
          required
          className="searchInput"
          type="text"
          value={localSearch?.name}
          onChange={(e) => setLocalSearch({ ...localSearch, name: e.target.value })}
        />
        <button className="searchButton" type="submit">
          <FaSearch size={20} />
        </button>
      </div>
    </form>
  );
};

export default Navbar;
