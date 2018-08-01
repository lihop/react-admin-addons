import React from 'react'
import PropTypes from 'prop-types'
import assert from 'assert'
import { shallow, render, mount } from 'enzyme'

import PlacesAutocompleteInput from './PlacesAutocompleteInput'

describe('<PlacesAutocompleteInput', () => {
  const defaultProps = {
    source: 'foo',
    meta: {},
    input: {},
    translate: x => x,
  }

  // TODO: Write tests
  it('works', () => {
    assert.equal(true, true)
  })
})
