import React from 'react'
import { AutocompleteInput } from 'react-admin'

export class PlacesAutocompleteInput extends React.Component {
  render() {
    return <AutocompleteInput source="place" />
  }
}
