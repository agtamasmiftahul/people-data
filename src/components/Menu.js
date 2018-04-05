import React from 'react'
import {Grid, Menu, Header} from 'semantic-ui-react'

const MenuBar = () => {
  return (
    <Grid centered columns={1}>
      <Menu color='blue' secondary inverted fluid>
        <Menu.Menu position='left'>
          <Menu.Item>
            <Header size='large'>People Data</Header>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </Grid>
  )
}

export default MenuBar
