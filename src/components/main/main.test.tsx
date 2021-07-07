import React from 'react'
import { render, screen } from '@testing-library/react'
import Main from '.'
describe('<Main />', () => {
  it('Should render main', () => {
    render(<Main />)
    const main = screen.getByTestId('main')
    expect(main).toBeTruthy()
  })
})
