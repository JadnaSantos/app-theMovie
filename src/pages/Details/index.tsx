import { useNavigate } from 'react-router-dom'
import { DetailContainer, DetailsItem } from './styles'
import React from 'react'

export const Details = () => {
  const navigate = useNavigate()

  function handleGoBack() {
    navigate('/')
  }

  return (
    <DetailContainer>
      <DetailsItem>
        <h1>Pagina em manutenção</h1>
        <button data-testid="button" onClick={handleGoBack}>Go Back</button>
      </DetailsItem>
    </DetailContainer>
  )
}
