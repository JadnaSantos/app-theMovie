import React from 'react';
import { render } from '@testing-library/react'
import { describe } from '@jest/globals'
import { Loading } from '.'

describe('Loading', () => {
  it('should render Loading correctly', () => {
    render(<Loading />)
  })
})
