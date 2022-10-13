import { api } from "./api"

export const apiKey = '?api_key=d195201f98f0688e03a7827aa1fe6b37'


export const getPopularMovies = async () => {
  const popularMovies = await api.get(`movie/popular${apiKey}&language=en-US&page=1`)

  return popularMovies
}

export const getDetailsMovies = async (movieId: string) => {
  const detailsMovie = await api.get(`movie/${movieId}${apiKey}&language=en-US&page=1`)

  return detailsMovie
}

export const getSearchMovies = async (query: string) => {
  const searchMovies = await api.get(`search/movie${apiKey}&query=${query}`)

  return searchMovies
}


