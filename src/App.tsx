import { Navigate, Routes, Route } from "react-router-dom";
import Layout from "./layouts/default";
import Movies from "./pages/movies";
import "./assets/css/index.css";

import MovieDetails from "./components/MovieDetails/MovieDetailsPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate replace to="/movies" />} />
        <Route path="movies" element={<Movies />} />
        <Route path="details:movieID" element={<MovieDetails />}/>
      </Route>
    </Routes>
  );
}

export default App;
