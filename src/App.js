import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import Landing from './components/Landing'
import Projects from './components/Portfolio/Projects'
import Skills from './components/Skills'

import styled from 'styled-components'

const StyledApp = styled.div`
display:flex;
flex-direction:column;
overflow-y:scroll;
`
function App() {
  return (
    <StyledApp>
     <Route exact path="/" component={Landing} />
     <Projects />
     <Route exact path="/skills" component = {Skills}/>

    </StyledApp>
  );
}

export default App;
