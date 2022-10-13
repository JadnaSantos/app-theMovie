import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  background-color:  ${({ theme }) => theme.colors?.['base-500']};

  color:  ${({ theme }) => theme.colors?.['base-100']};

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

export const HeaderTitle = styled.h1`
  font-weight: bold;
  font-size: 2.5rem;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    margin-bottom: 16px;
  }
`

export const HeaderItem = styled.div`
`

export const InputFormContainer = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color:  ${({ theme }) => theme.colors?.['base-700']};
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;

  input {
    background: transparent;
    height: 2.5rem;
    border: 0;
    border-bottom: 2px solid  ${({ theme }) => theme.colors?.['base-800']};
    font-weight: bold;
    font-size: 1.125rem;
    padding: 0 0.5rem;
    color:  ${({ theme }) => theme.colors?.['base-700']};
    &:focus {
      box-shadow: none;
      border-color: ${({ theme }) => theme.colors?.['base-800']};
    }
    &::placeholder {
      color: ${({ theme }) => theme.colors?.['base-800']};
    }
  }

  button {
    background: transparent;
  }

  svg {
    color: ${({ theme }) => theme.colors?.['base-1000']};

  }
`

