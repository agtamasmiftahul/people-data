import React, {Component} from 'react'
import {Grid, Menu, Button} from 'semantic-ui-react'
import DATA from '../data/data'

export default class MenuRandom extends Component {
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
    return (
      <Grid centered columns={1}>
        <Menu color='blue' secondary inverted fluid>
          <Menu.Menu position='left'>
            <Menu.Item>
              <Button positive onClick={this.loadData.bind()}></Button>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Grid>
    )
  }
}
