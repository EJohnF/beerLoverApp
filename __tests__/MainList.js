import React from 'react'
import {
  render,
  fireEvent,
  cleanup,
  waitForElement,
} from '@testing-library/react'
import 'jest-dom/extend-expect'
import App from '../App'

afterEach(cleanup)

test('Fetch makes an API call and displays the greeting when load-greeting is clicked', async () => {
  // Arrange
  const {getByText, getByTestId, container, asFragment} = render(
    <App />,
  )

  // expect(fetch).toHaveBeenCalledTimes(1)
  // expect(axiosMock.get).toHaveBeenCalledWith(url)
  // expect(getByTestId('greeting-text')).toHaveTextContent('hello there')
  // expect(getByTestId('ok-button')).toHaveAttribute('disabled')
  // snapshots work great with regular DOM nodes!
  expect(getByTestId('item_name_0')).toHaveTextContent('Buzz');
  // expect(container.firstChild).toMatchSnapshot()
  // you can also get a `DocumentFragment`, which is useful if you want to compare nodes across renders
  // expect(asFragment()).toMatchSnapshot()
})