import { useEffect, useRef, useState } from "react";
import { Movie } from "../../types/movies.types";
import { getPopularMovies } from "../../common/services/services";
import { MovieCard } from '../../components/MovieCard'
import { Link } from 'react-router-dom';

import { HomeContainer, HomeContent } from "./styles";
import { toast } from "react-toastify";
import { Loading } from "../../components/Loading";
import { useDebouce } from "../../hooks/useDebouce";
import { Pagination } from "../../components/Pagination";


export function Home() {
  const [page, setPage] = useState(1)
  const [total, setTotalPages] = useState(1)
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const { debounce } = useDebouce()

  const handlePagination = () => {

  }


  useEffect(() => {
    debounce(() => {
      const loadMovies = async () => {
        try {
          const response = await getPopularMovies()
          setMovies(response.data.results)

        } catch (error) {
          toast.error('Houve algum erro! Tente novamente mais tarde!');
        } finally {
          setLoading(false)
        }
      }
      loadMovies()
    })
  }, [])


  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <HomeContainer>
          <h1>Mais Populares</h1>
          <HomeContent>
            {movies.map((movie) => (
              <Link key={movie.id} to={`/details/${movie.id}`}>
                <MovieCard key={movie.id} {...movie} />
              </Link>
            ))}
          </HomeContent>
        </HomeContainer >
      )}

      <Pagination />
    </>

  )
}
