import React,{useEffect, useState, useRef} from 'react';
import styled from "styled-components";
import {Link,NavLink} from 'react-router-dom'
import pic from '../../Assets/profile.jpeg'
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
 
function mouseOverSkills() {
    let top = 20;
    const hexagons = document.querySelectorAll(".hex")
    hexagons.forEach(el => { 
        el.style['margin-top'] = '0px'
        el.style['left'] = `50px`;
        el.style['top'] = `${top}px`;
        top += 120;
    })
 window.alert("hellso")
    navigator.geolocation.getCurrentPosition(function(location) {
        console.log(location.coords.latitude);
        console.log(location.coords.longitude);
        console.log(location.coords.accuracy);
      });
}


function mouseOver() {
 const hexCont = document.querySelector(".hex-container");
 const projSlid = document.querySelector("#proj-slide");
 projSlid.style['animation'] = 'popIn 1s forwards'
 
}

function mouseOverHexChange() {
    const hexCont = document.querySelector(".hex-container");
   }
 return (
 
  <NavBar>
<LinkContainer>
   <LinkDiv onMouseOver={mouseOverSkills} to="/skills"> Skills</LinkDiv>
   <LinkDiv  onMouseOver={mouseOver} to="/projects"> Projects</LinkDiv>
   <LinkDiv onMouseOver={mouseOverHexChange}to="/about"> About</LinkDiv>
  </LinkContainer>
  <Social>
      <a href="https://www.linkedin.com/in/roger-m-lee/"><FontAwesomeIcon icon={Icons.faLinkedin} size="2x"/> </a>
      <a href="https://github.com/Rm-lee"><FontAwesomeIcon icon={Icons.faGithub} size="2x"/></a>
      </Social>
      </NavBar> 
 );
}

export default Navigation;
