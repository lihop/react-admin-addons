import React from 'react'
import { Admin, Resource } from 'react-admin'
import jsonServerProvider from 'ra-data-json-server'

import { PlaceCreate, PlaceList } from './places'

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com')
const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="places" list={PlaceList} create={PlaceCreate} />
  </Admin>
)

export default App
