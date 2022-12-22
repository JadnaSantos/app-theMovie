import { DefaultLayout } from "./layouts/DefaultLayout"
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { MovieDetails } from "./pages/MoviesDetails";
import { Search } from "./pages/Search";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/search/:search" element={<Search />} />
        <Route path="/details/:id" element={<MovieDetails />} />
      </Route>
    </Routes>
  )
}
