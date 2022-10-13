import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 0 auto;
`

export const CardMovies = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 180px;
    border-radius: 1rem;
    margin-bottom: 1rem;
  }

  span {
    font-size: 1rem;

    color: ${({ theme }) => theme.colors?.['base-100']};
  }

  img:hover {
    transform: scale(1.1);
  }
`

