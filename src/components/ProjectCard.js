import React from 'react';
import styled from 'styled-components'

const Card = styled.div`
padding:10px;
display:flex;
flex-direction:column;
align-items:center;
color:white;

`
const CardImg = styled.img`
width:75%;
height:auto;
`

function ProjectCard(props) {
  return (
    <>
    <Card>
    <CardImg src={props.image}/> 
       <h1><a style={{textDecoration:"none",color:"white"}}href={props.url}>{props.name}</a></h1>

    </Card>
    </>
  );
}
export default ProjectCard