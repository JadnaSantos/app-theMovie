import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  margin: 4rem 0 2rem 0;

  button {
    background-color: ${({ theme }) => theme.colors?.['base-300']};
    border: none;
    cursor: pointer;
    border-radius: 1rem;
    color: white;
    padding: 0.5rem 1rem;
    margin-top: 1rem;
    font-size: 100%;
    transition: all .3s;
  }
`
