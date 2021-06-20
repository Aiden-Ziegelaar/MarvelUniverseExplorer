// import react-testing methods
import {render, screen} from '@testing-library/react'

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom/extend-expect'
// the component to test
import Search from "./Search";
import userEvent from "@testing-library/user-event";

test('Check search updates state', async () => {
  jest.useFakeTimers()
  let setInput = jest.fn()
  render(<Search setSearch={setInput} />)
  userEvent.type(screen.getAllByPlaceholderText('Search…')[0], 'Hello, World!')
  jest.runOnlyPendingTimers()
  expect(setInput).toHaveBeenCalledWith('Hello, World!')
  jest.useRealTimers()
})
