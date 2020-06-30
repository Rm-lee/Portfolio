import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import Landing from './components/Landing'
import Projects from './components/Portfolio/Projects'
import Skills from './components/Skills'
import ProjectsPage from './components/Portfolio/ProjectsPage'
import styled from 'styled-components'

const StyledApp = styled.div`
display:flex;
flex-direction:column;
`
function App() {
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    return (
      <div style={{display:"flex",justifyContent:"center",flexDirection:"column",width:"100vw",height:"100vh"}}>
        <h1>Open site on Desktop or visit </h1>
     <a href="https://www.linkedin.com/in/roger-m-lee/">LinkedIn</a> </div>
    )
   }
  return (
    <StyledApp>
     <Route exact path="/" component={Landing} />
     <Projects />
     <Route exact path="/skills" component = {Skills}/>
     <Route exact path="/projects" component = {ProjectsPage}/>


    </StyledApp>
  );
}

export default App;
