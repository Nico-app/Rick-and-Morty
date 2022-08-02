import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { PersonajeDetail } from "./Details/PersonajeDetails";
import LandingPage from "./LandingPage";
import { useState } from "react";
import { Search } from "./utils/Types";

const App = () => {
  const [search, setSearch] = useState<Search>();
  return (
    <Router>
      <header>
        <Link to="/">
          <h1 className="title">Rick and Morty</h1>
        </Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<LandingPage search={search} setSearch={setSearch} />} />
          <Route path="/personaje/:id" element={<PersonajeDetail />} />
        </Routes>
      </main>
    </Router>
  );
};
export default App;
