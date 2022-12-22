import { Movie } from "."
import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, test } from '@jest/globals'

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => mockedUsedNavigate,
}));

describe('Details', () => {
  test('render logo and input correctly', () => {
    render(<Movie />);

    expect(screen.getByText('Pagina em manutenção')).toBeInTheDocument();
    expect(screen.getByTestId('button')).toBeInTheDocument();
  })
})
