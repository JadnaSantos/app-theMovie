import { render } from '@testing-library/react'
import { describe, test } from '@jest/globals'
import React from 'react';
import { MovieCard } from '.';
import { Movie } from "../../types/movies.types"

describe('MovieCard', () => {
  test('should show description movie', () => {
    const movies: Movie = {
      id: '0000',
      title: 'TESTE',
      poster_path: 'image'
    }

    render(<MovieCard movies={movies} />, {})
  })
})
