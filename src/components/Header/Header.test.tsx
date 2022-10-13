import { Header } from "."
import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, test } from '@jest/globals'

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => mockedUsedNavigate,
}));

describe('Header', () => {
  test('render logo and input correctly', () => {
    render(<Header />);

    expect(screen.getByText('The Movie')).toBeInTheDocument();
    expect(screen.getByTestId('input')).toBeInTheDocument()
  })
})
