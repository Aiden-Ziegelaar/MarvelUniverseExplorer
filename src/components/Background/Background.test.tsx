// import dependencies
import React from 'react'

// import react-testing methods
import { render, screen } from '@testing-library/react'

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom/extend-expect'
// the component to test
import BackGround from './Background'

test('Check background loads children', async () => {
  render(<BackGround>
    <p data-testid="testChild">Test Background</p>
  </BackGround>)
  expect(screen.getByTestId('testChild')).toHaveTextContent('Test Background')
})
