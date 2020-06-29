import React from 'react';
import styled from "styled-components";
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Icons from '@fortawesome/free-brands-svg-icons'

const Social = styled.div`
display:flex;
justify-content:space-around;
width:50%;
margin:10px auto 0;
padding-top:30px;
a{
    color:#444444;
    :hover{
        color:#000000
    }
}
`

const NavBar = styled.div`
display:flex;
flex-direction: column;
 }

`
const LinkContainer = styled.div`
display:flex;
margin-top:50px;
align-items:flex-start;
justify-content:flex-end;
background:transparent;
`

const LinkDiv = styled(Link)`
font-family:"Playfair display";
margin:20px 0 20px;
display:flex;
align-items:center;
align-content:center;
justify-content:center;
border-bottom:3px solid white;
position:relative;
line-height: .75;
text-decoration:none;
width:100%; 
align-content:center;
color:black;
font-size:1.2rem;
padding:10px 5px;
margin:0 30px 0;
&:hover{
    cursor: pointer; 
        &:before {
        content: '';
        position: absolute;
        top: 50;
        left: 0;
        margin:0 auto;
        width: 100%;
        height: 50px;
        border-radius: 20%;
        border-top: 3px solid #333333;
        animation: spinner .5s ;
    }
    &:after{
        content: '';
        position: absolute;
        top: 50;
        left: 0;
        margin:0 auto;
        width: 100%;
        height: 50px;
        border-radius: 20%;
        border-bottom: 3px solid #333333;
        animation:appear 1s;
        
    }
        @keyframes spinner {
            0%{transform:rotate(90deg);}
            0%{transform:scale(0)}
            
             100%{   transform:scale(1)  rotate(360deg);}
           }
           @keyframes appear {
            
            0%   { opacity: 0; }
            50% {opacity:0;}
            100% { opacity: 1; }
          }
            
           }

}



`


function Navigation(props) {
    
  


function mouseOver() {
 const projSlid = document.querySelector("#proj-slide");
 projSlid.style['animation'] = 'popIn 1s forwards'
 
}

 return (
 
  <NavBar>
<LinkContainer>
   <LinkDiv  to="/skills"> Skills</LinkDiv>
   <LinkDiv  onMouseOver={mouseOver} to="/projects"> Projects</LinkDiv>
  </LinkContainer>
  <Social>
      <a href="https://www.linkedin.com/in/roger-m-lee/"><FontAwesomeIcon icon={Icons.faLinkedin} size="2x"/> </a>
      <a href="https://github.com/Rm-lee"><FontAwesomeIcon icon={Icons.faGithub} size="2x"/></a>
      </Social>
      </NavBar> 
 
 );
}

export default Navigation;
