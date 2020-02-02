import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import Landing from './components/Landing'
import Navigation from './components/Navigation/Navigation'
import Projects from './components/Portfolio/Projects'
import Skills from './components/Skills'
import Hexagons from './components/Hexagons'

import styled from 'styled-components'

const StyledApp = styled.div`
display:flex;
flex-direction:column;
overflow-y:scroll;
`
function App() {
  return (
    <StyledApp>
      <Hexagons />
     <Route exact path="/" component={Landing} />
     <Projects />
     <Route exact path="/skills" component = {Skills}/>

    </StyledApp>
  );
}

export default App;
