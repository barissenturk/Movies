import "./App.css";
import Home from "./Components/Pages/HomePage/HomePage";
import MoviesDetailPage from "./Components/Pages/HomePage/MoviesDetailPage/MoviesDetailPage";
import TvPage from "./Components/Pages/TvShowPage/TvShowPage";
import ActorsPage from "./Components/Pages/ActorsPage/ActorsPage";
import { Routes, Route } from "react-router-dom";
import TvShowDetailPage from "./Components/Pages/TvShowPage/TvShowDetailPage/TvShowDetailPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tvshow" element={<TvPage />} />
        <Route path="/actors" element={<ActorsPage />} />
        <Route path="/:id/movieDetail" element={<MoviesDetailPage />} />
        <Route path="/:id/tvDetail" element={<TvShowDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
