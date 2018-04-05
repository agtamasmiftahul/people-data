import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import './App.css'
import People from './components/Card'
import MenuBar from './components/Menu'

export default class App extends Component {
  render() {
    return (
      <Grid columns={1} padded>
        <Grid.Column>
          <MenuBar />
        </Grid.Column>
        <Grid.Column>
          <People />
        </Grid.Column>
      </Grid>
    )
  }
}
