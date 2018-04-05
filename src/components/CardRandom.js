import React, { Component } from 'react'
import {Grid, Card, Image, Menu, Header} from 'semantic-ui-react'
import DATA from '../data/data'

export default class CardRandom extends Component {
  state = {
    people : []
  }
  componentDidMount(){
    setInterval(() =>
      this.setState({
        people: DATA[Math.floor(Math.random() * DATA.length)]
      }), 3000
    )
  }

  render(){
    let {people} = this.state
    return (
    <div>
    <Menu color='blue' secondary inverted fluid>
      <Menu.Menu position='left'>
        <Menu.Item>
          <Header size='large'>Load Random</Header>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
    <Grid centered columns={5} padded>
      <Grid.Column key={people.id}>
        <Card color='blue' fluid>
          <Image src={people.thumbnailUrl} fluid/>
          <Card.Content textAlign='center'>
            <Card.Header>
              {people.name}
            </Card.Header>
            <Card.Meta>
              {people.jobs}
            </Card.Meta>
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid>
    </div>
    )
  }
}
