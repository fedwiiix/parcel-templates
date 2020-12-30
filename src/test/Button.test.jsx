import React from 'react'
import Button from '../modules/Button'
import { render } from '@testing-library/react'
import { screen } from '@testing-library/dom'


test('my test', function () {
  render(
    <Button title='hello' onClick={() => null}>
      <div id='demo'>my content</div>
    </Button>
  )
  const demo = document.querySelector('#demo')
  const title = screen.getByText('my content')
  expect(title).toBeInTheDocument()
  expect(demo).not.toBeNull()
})
