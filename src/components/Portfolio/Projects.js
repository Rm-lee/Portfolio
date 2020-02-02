import React from 'react';
import styled from 'styled-components'
import ProjectCard from '../ProjectCard'
import wander from '../../Assets/wanderlustImg.png'
import guidr from '../../Assets/guidr.png'
import greatidea from '../../Assets/greatidea.png'
import vid2jsonimg from '../../Assets/vid2jsonimg.png'
import pykey from '../../Assets/pykey.png'

const ProjSideSlide = styled.div`
height:100vh;
max-width:500px;
width:25%;
background:rgba(0,0,0,0.3);
z-index: 3;
top:0;
right:0;
position:absolute; 
display:flex;
transform: translate(200%,0);
@keyframes popIn{
 0%{
  transform: translate(200%,0);

 }
 100%{
  transform: translate(0,0);
 }
}
@keyframes popOut{
 0%{
  transform: translate(0,0);

 }
 100%{
  transform: translate(200%,0);
 }
}
`
const InnerSLide = styled.div`
width:100%;
padding-top:50px;
display:flex;
flex-direction column;
align-content:center;
overflow-y:auto;

`

function close(){
    const projSlid = document.querySelector("#proj-slide");
    projSlid.style['animation'] = 'popOut 1s forwards'
   }

function Projects(props) {

 return (
  <ProjSideSlide onMouseLeave={close}id="proj-slide">
  <InnerSLide >
  <ProjectCard image={wander} name={"wanderLust"}/>
  <ProjectCard image={guidr} name={"Guidr"}/>
  <ProjectCard image={greatidea} name={"Great Idea"}/>
  <ProjectCard image={vid2jsonimg} name={"Vid2Json"}/>
  <ProjectCard image={pykey} name={"Py-Key"}/>

  </InnerSLide>
  </ProjSideSlide>
 );
}

export default Projects;