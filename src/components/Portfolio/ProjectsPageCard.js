import React from 'react';
import styled from 'styled-components'
import { Card, Icon, Image } from 'semantic-ui-react'

const ProjectPageCard = (props) => (
    <div style={{minWidth:"35%",justifyContent:"center"}}>
  <Card onClick={() => window.open(props.url)}style={{margin:"20px",width:"400px",borderRadius:"5px"}}>
    <Image src={props.image} size="massive" />
    <Card.Content>
      <Card.Header>{props.name}</Card.Header>
      <Card.Meta>
        {/* <span className='date'>Joined in 2015</span> */}
      </Card.Meta>
      <Card.Description>
      {props.description}
      </Card.Description>
    </Card.Content>
    <Card.Content extra><a style={{textDecoration:"none"}}href={props.url}><Icon name='chrome' />{props.name}</a>

     
    </Card.Content>
  </Card>
  </div>
)




export default ProjectPageCard