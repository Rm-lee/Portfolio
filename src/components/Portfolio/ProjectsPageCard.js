import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'

function ProjectPageCard  (props) {

  function openUrl(){
    window.open(props.url)
  } 



  return (
    <div onClick={openUrl}style={{minWidth:"35%",justifyContent:"center",cursor:'pointer'}}>
  
  <Card style={{margin:"20px",width:"400px",borderRadius:"5px"}}>
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
}




export default ProjectPageCard