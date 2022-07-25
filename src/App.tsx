import "./App.css"
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { PersonajeDetail } from './Details/PersonajeDetails';
import { LandingPage } from './LandingPage';

export function App() {
    return (
        <Router>
            <header>
              <Link to="/">
                <h1 className='title'>Rick and Morty</h1>
                </Link>
            </header>
            <main>
                <Routes>

                    <Route path="/personaje/:id" element={<PersonajeDetail/>}/>

                    <Route path="/" element={<LandingPage/>} />

            </Routes>{" "}
            </main>
        </Router>
    )
}