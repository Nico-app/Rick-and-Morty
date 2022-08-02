import PersonajesGrid from "./Grid/PersonajesGrid";
import Navbar from "./Navbar/navbar";
import { Search } from "./utils/Types";

export type PaginationInfo = {
  next: string;
  prev?: string;
};

type LandingPageProps = {
  setSearch: (search: Search) => void;
  search?: Search;
};

const LandingPage = ({ search, setSearch }: LandingPageProps) => (
  <div>
    <Navbar setFilters={setSearch} />
    <PersonajesGrid search={search} />
  </div>
);

export default LandingPage;
