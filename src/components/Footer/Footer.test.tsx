// import dependencies
import React from 'react'

// import react-testing methods
import { render, screen } from '@testing-library/react'

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom/extend-expect'
// the component to test
import Footer from './Footer'

test('Check the attribution is loaded', async () => {
  render(<Footer/>)
  expect(screen.getByText('Data provided by Marvel. © 2021 MARVEL')).toHaveTextContent('Data provided by Marvel. © 2021 MARVEL')
})
