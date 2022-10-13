import React from 'react';
import { Movie } from "../../types/movies.types"
import { imagem } from "../../common/utils/image"
import { CardContainer, CardMovies } from "./styles"

export const MovieCard = ({ id, title, poster_path }: Movie) => {
  return (
    <CardContainer>
      <CardMovies key={id}>
        <img src={`${imagem}${poster_path}`} />
        <span>{title}</span>
      </CardMovies>
    </CardContainer>
  )
}
