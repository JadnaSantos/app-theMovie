import { api } from "./api"

export const apiKey = '?api_key=d195201f98f0688e03a7827aa1fe6b37'


export const getPopularMovies = async (page = 1) => {
  const popularMovies = await api.get(`movie/popular${apiKey}&language=pt-BR&page=${page}`)

  return popularMovies
}

export const getDetailsMovies = async (id: string, page = 1) => {
  const detailsMovie = await api.get(`movie/${id}${apiKey}&language=pt-BR&page=${page}`)

  return detailsMovie
}

export const getSearchMovies = async (query: string) => {
  const searchMovies = await api.get(`search/movie${apiKey}&query=${query}`)

  return searchMovies
}


