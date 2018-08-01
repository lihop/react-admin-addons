import React from 'react'
import { Create, List, SimpleForm, TextInput } from 'react-admin'
import { PlacesAutocompleteInput } from 'ra-places-autocomplete'

export const PlaceList = props => (
  <List {...props} />
)

export const PlaceCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <PlacesAutocompleteInput />
    </SimpleForm>
  </Create>
)
