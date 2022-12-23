import React from 'react'
import { Header } from "."
import { render, screen } from '@testing-library/react'
import { describe } from '@jest/globals'

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => mockedUsedNavigate,
}));

describe('Header', () => {
  it('should render Header correctly', () => {
    render(<Header />);

    expect(screen.getByText('The Movie')).toBeInTheDocument();
    expect(screen.getByTestId('input')).toBeInTheDocument()
  })
})
