import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Movie } from "../../types/movies.types";
import { getSearchMovies } from "../../common/services/services";
import { MovieCard } from "../../components/MovieCard";
import { Loading } from "../../components/Loading";
import { toast } from "react-toastify";
import { SearchContainer, SearchContent } from "./styles";
import { useDebouce } from "../../hooks/useDebouce";
import { Pagination } from "../../components/Pagination";
import { MovieDetails } from "../MoviesDetails";


export const Search = () => {
  const { search } = useParams();
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const { debounce } = useDebouce()

  useEffect(() => {
    debounce(() => {
      const loadSearchMovies = async () => {
        try {
          const response = await getSearchMovies(search);

          setMovies(response.data.results)

        } catch (error) {
          toast.error('Houve algum erro! Tente novamente mais tarde!');
        } finally {
          setLoading(false)
        }
      }
      loadSearchMovies()
    })

  }, [])


  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <SearchContainer>
          <h2>{`${movies.length === 0
            ? 'Nenhum resultado para a pesquisa:'
            : 'Resultados para a pesquisa:'
            }  "${search}"`}
          </h2>
          <SearchContent>
            {movies.map((movie) => (
              <MovieCard key={movie.id} {...movie} />
            ))}
          </SearchContent>
        </SearchContainer>
      )}

      <Pagination />
    </>
  )
}
