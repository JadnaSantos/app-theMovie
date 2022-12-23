import React from 'react'
import { MovieDetails } from "."
import { render, screen } from '@testing-library/react'
import { describe, test } from '@jest/globals'

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => mockedUsedNavigate,
}));

describe('MovieDetails', () => {
  it('should render logo and input correctly', () => {
    render(<MovieDetails />);

    expect(screen.getByText('Pagina em manutenção')).toBeInTheDocument();
    expect(screen.getByTestId('button')).toBeInTheDocument();
  })
})
