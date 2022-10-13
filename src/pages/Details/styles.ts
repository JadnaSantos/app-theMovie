import styled from "styled-components";

export const DetailContainer = styled.div`
  color: ${({ theme }) => theme.colors?.['base-100']};
  flex: 1;
  display: flex;
`

export const DetailsItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 6rem;
  max-width: 50%;

  h1 {
    margin: 3rem 0;
  }

  button {
    background-color: ${({ theme }) => theme.colors?.['base-300']};
    border: none;
    cursor: pointer;
    border-radius: 1rem;
    color: white;
    padding: 0.8rem 2rem;
    margin-top: 1rem;
    font-size: 100%;
    transition: all .3s;
  }

`
