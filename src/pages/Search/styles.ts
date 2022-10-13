import styled, { css } from 'styled-components';

export const SearchContainer = styled.main`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & h2 {
    margin-top: 2rem;
    color:  ${({ theme }) => theme.colors['base-100']};
  }
`;

export const SearchContent = styled.section`
  width: 100%;
  padding: 2rem 3rem 3rem;

  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-evenly;
  gap: 4rem;
`;
