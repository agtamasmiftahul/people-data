import React from 'react'
import {Grid, Card, Image} from 'semantic-ui-react'
import DATA from '../data/data'

const CardPeople = () => {
  return (
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
  )
}

export default CardPeople
