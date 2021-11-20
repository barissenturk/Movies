import "./App.css";
import Home from "./Components/Pages/HomePage/HomePage";
import TvPage from "./Components/Pages/TvShowPage/TvShowPage";
import ActorsPage from "./Components/Pages/ActorsPage/ActorsPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tvshow" element={<TvPage />} />
        <Route path="/actors" element={<ActorsPage />} />
      </Routes>
    </div>
  );
}

export default App;
