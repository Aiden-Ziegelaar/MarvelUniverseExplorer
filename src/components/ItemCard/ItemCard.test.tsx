// import dependencies
import React from 'react'

// import react-testing methods
import { render, screen } from '@testing-library/react'

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom/extend-expect'
// the component to test
import ItemCard from "./ItemCard";
import ItemCardCharacter from "../../TestData/itemCardCharacter"

test('Check background loads children', async () => {
  render(<ItemCard data={ItemCardCharacter}/>)
  // check image is loaded on card titled by character name
  expect(screen.getByTitle(ItemCardCharacter.name)).toHaveAttribute(
    'style', "background-image: url(http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg);"
  )
})