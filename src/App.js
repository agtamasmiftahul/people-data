import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import People from './components/Card'
import PeopleRandom from './components/CardRandom'
import MenuBar from './components/Menu'
import PeopleSort from './components/CardSort'

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
        <Grid.Column>
          <PeopleRandom />
        </Grid.Column>
        <Grid.Column>
          <PeopleSort />
        </Grid.Column>
      </Grid>
    )
  }
}
