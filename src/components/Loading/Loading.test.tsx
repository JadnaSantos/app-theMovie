import { render } from '@testing-library/react'
import { describe, test } from '@jest/globals'
import { Loading } from '.'
import React from 'react';

describe('Loading', () => {
  test('should render correctly', () => {
    render(<Loading />)
  })
})
