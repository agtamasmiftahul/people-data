import React, { Component } from 'react'
import {Grid, Card, Image, Menu, Header} from 'semantic-ui-react'
import DATA from '../data/dataSort'

export default class CardSort extends Component {
  render(){
    return(
      <div>
      <Menu color='blue' secondary inverted fluid>
        <Menu.Menu position='left'>
          <Menu.Item>
            <Header size='large'>People Data Sort</Header>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
      <Grid centered columns={5} padded>
        {DATA.map(DATA =>
        <Grid.Column key={DATA.id}>
          <Card color='blue' fluid>
            <Image src={DATA.thumbnailUrl} fluid/>
            <Card.Content textAlign='center'>
              <Card.Header>
                {DATA.name}
              </Card.Header>
              <Card.Meta>
                {DATA.jobs}
              </Card.Meta>
            </Card.Content>
          </Card>
        </Grid.Column>
        )}
      </Grid>
      </div>
    )
  }
}
