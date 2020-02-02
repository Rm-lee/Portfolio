import React from 'react';
import styled from 'styled-components'
import refresh from '../Assets/refresh-arrow.png'
import lock from '../Assets/lock.png'
const Arrow = styled.div`
position:relative;
top:0px;
left:10px;
height:15px;;
width:15px;
color:white;
z-index:10;
background:white;
background-image: url(${lock});
background-size:cover;
filter: drop-shadow(108px -60px 0px #f8f8f8);


`
const Arrow2 = styled.div`
position:relative;
top:0px;
left:10px;
height:15px;;
width:15px;
color:white;
z-index:10;
background-image: url(${lock});
background-size:cover;
filter: drop-shadow(108px -75px 0px #7f7f7f);


`
const HexCont = styled.div`
position:relative;
width:10px;
height:100%;
background:red;
left:50px;
top:-200px;
z-index:3;

`
const Hex = styled.div`
position:absolute;
margin-top:10%;
margin-left:10%; 
transition:all 1ms, left 2s, top 2s;
backface-visibility: hidden
top:${props => props.top} ;
left:${props => props.left};
width:100px;
height:100px; 
 background:linear-gradient(to right, rgba(75,232,224,1) 0%, rgba(75,232,224,1) 12%, rgba(84,209,201,1) 48%, rgba(65,133,158,1) 100%);;
clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
&:hover{
  transform:scale(1.1);
}
&:hover:after{
    border-left:6px solid white;
    
  }
&:after{
  
  display:flex;
  justify-content:center;
  align-items:center;
  content:"${props => props.content}";
  width:100%;
  height:100%;
  font-size:1.5rem;
  z-index:10;
  color:white;
  font-weight:bold;
  background:linear-gradient(to right, #000000, #333333);
  mix-blend-mode:multiply;
  border-left:4px solid white;
} 

`

 function Hexagons() {
  return (
    <>
    <Arrow/>
    <Arrow2/>

     <HexCont className="hex-container">

<Hex className="hex" background="blue" top="-50px" left="-50px" content="  CSS" />
<Hex className="hex" background="blue" top="-50px" left="155px" content=" HTML" />
<Hex className="hex" background="blue" top="-50px" left="53px" content="   JS" />
<Hex className="hex" background="blue" top="30px" left="105px" content="Python" />
<Hex className="hex" background="blue" top="30px" left="-105px" content="---------" />
<Hex className="hex" background="blue" top="188px" left="-105px" content="---------" />

<Hex className="hex" background="blue" top="30px" left="2px" content="React" />
<Hex className="hex" background="blue" top="110px" left="-50px" content=" Node" />
<Hex className="hex" background="blue" top="110px" left="55px" content="Express" />
<Hex className="hex" background="blue" top="188px" left="3px" content=" Less" />
<Hex className="hex" background="blue" top="266px" left="-50px" content="Redux" />



</HexCont>
    </>
  );
}
export default Hexagons