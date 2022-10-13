import styled from 'styled-components'

export const HomeContainer = styled.div`
  padding: 1rem;

  h1 {
    margin-top: 2rem;
    display: flex;
    padding: 20px;
    color: ${({ theme }) => theme.colors['base-100']};
  }
  p {
    text-align: center;
    margin-bottom: 4rem;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors['base-100']};
  }

  &:hover {
    cursor: pointer;
  }
`

export const HomeContent = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  column-gap: 3rem;
  row-gap: 4rem;

  a {
    display: flex;
    flex-direction: column;
    text-decoration: none;
    border-radius: 4px;
    padding: 10px;
  }
`


