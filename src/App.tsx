import * as React from 'react'
import { hot } from 'react-hot-loader'
import PivotBug from './PivotBug'

const App = () => (
  <h1>
    Hello, world.<br />
    <PivotBug />
  </h1>
)

export default hot(module)(App)
