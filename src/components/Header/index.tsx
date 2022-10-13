import React from 'react';
import { HeaderContainer, HeaderTitle, HeaderItem, InputFormContainer } from "./styles"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { MagnifyingGlass } from "phosphor-react";

export const Header = () => {
  const navigate = useNavigate()
  const [search, setSearch] = useState('');


  function handleLogoClick() {
    navigate('/')
  }

  function handleSearchMovie() {
    navigate(`/search/${search}`)
  }

  const handleSearchValue = (event: any) => {
    setSearch(event.target.value)
  }

  return (
    <HeaderContainer>
      <HeaderTitle onClick={handleLogoClick}>The Movie</HeaderTitle>
      <HeaderItem >
        <InputFormContainer >
          <input
            type="text"
            placeholder="Buscar conteúdo..."
            data-testid="input"
            onChange={handleSearchValue}
          />
          <button
            onClick={handleSearchMovie}
          >
            <MagnifyingGlass size={20} />
          </button>
        </InputFormContainer>
      </HeaderItem>
    </HeaderContainer>
  )
}
