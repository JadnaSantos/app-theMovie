import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { DetailContainer, DetailsItem } from './styles'
import { getDetailsMovies } from '../../common/services/services'
import { Movie } from '../../types/movies.types'
import { imagem } from '../../common/utils/image'
import { toast } from 'react-toastify'

export const MovieDetaisl = () => {
  const [movies, setMovies] = useState<Movie>([]);
  const navigate = useNavigate()
  const { id } = useParams()

  function handleGoBack() {
    navigate('/')
  }

  const loadDetails = async () => {
    try {
      const response = await getDetailsMovies(id as string)
      console.log(response.data)
      setMovies(response.data)


    } catch (error) {
      toast.error('Houve algum erro! Tente novamente mais tarde!');
    }
  }

  useEffect(() => {
    loadDetails()
  }, [])


  return (
    <DetailContainer>
      <DetailsItem>
        <h1>{movies.title}</h1>
        <p>{movies.tagline}</p>
        <img src={imagem + movies.poster_path} />

        <h3>Descrição: </h3>
        <span>{movies.overview}</span>
        <button data-testid="button" onClick={handleGoBack}>Voltar</button>
      </DetailsItem>

    </DetailContainer>
  )
}
