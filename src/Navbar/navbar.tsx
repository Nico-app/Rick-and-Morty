import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Search } from "../utils/Types";
import "./navbar.css";
import Select from "./Select/select";

type NavbarProps = {
  setFilters: (algo: Search) => void;
};

const Navbar = ({ setFilters }: NavbarProps) => {
  const [localSearch, setLocalSearch] = useState<Search>();

  const handleSubmit = async () => {
    if (!localSearch) {
      return;
    }
    setFilters(localSearch);
  };

  return (
    <div className="navbar">
      <input
        required
        className="searchInput"
        type="text"
        value={localSearch?.name}
        onChange={(e) => setLocalSearch({ ...localSearch, name: e.target.value })}
      />

      <Select
        use="gender"
        currentValue={localSearch?.gender}
        options={["Female", "Male", "Genderless", "Unknown"]}
        onSelect={(filter, value) => setLocalSearch({ ...localSearch, [filter]: value })}
      />

      <Select
        use="status"
        currentValue={localSearch?.status}
        options={["Alive", "Dead", "Unknown"]}
        onSelect={(filter, value) => setLocalSearch({ ...localSearch, [filter]: value })}
      />

      <button className="searchButton" onClick={handleSubmit}>
        <FaSearch size={20} />
      </button>
    </div>
  );
};

export default Navbar;
