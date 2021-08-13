import React from 'react';
import styled from 'styled-components'

const HexCont = styled.div`
position:relative;
width:10px;
height:100%;
background:red;
left:50px;
top:50px;
z-index:3;
filter: drop-shadow(50px -10px 80px #000099);

`
const Hex = styled.div`
position:absolute;
margin-top:10%;
margin-left:10%; 
transition:all 1ms, left 2s, top 2s;
top:${props => props.top} ;
left:${props => props.left};
width:100px;
height:100px; 
 background:linear-gradient(to right, rgba(75,232,224,1) 0%, rgba(75,232,224,1) 12%, rgba(84,209,201,1) 48%, rgba(65,133,158,1) 100%);;
clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
&:hover{
  transform:scale(1.1);
  cursor:pointer;
  z-index:1;
  background:linear-gradient(to top, rgba(75,232,224,1) 0%, rgba(222,222,222,1) 12%, rgba(255,255,255,1) 100%);;

  left: ${props => {
    if(props.content === "  SQL" || props.content === "Linux"){
      return "-50px"
    }
  }}
  
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
 

     <HexCont className="hex-container">

<Hex onClick={() => window.open("https://github.com/Rm-lee/Portfolio")}className="hex" id="hex1" background="blue" top="-50px" left="-50px" content="  CSS"/>
<Hex onClick={() => window.open("https://github.com/Rm-lee/User-Interface/tree/Roger-Lee")} className="hex" id="hex2"background="blue" top="-50px" left="155px" content=" HTML" />
<Hex onClick={() => window.open("https://savethisjob.com")}className="hex" id="hex3" background="blue" top="-50px" left="53px" content="   JS" />
<Hex onClick={() => window.open("https://github.com/Rm-lee/Forgit2Commit")} className="hex" id="hex4" background="blue" top="30px" left="105px" content="Python" />
<Hex onClick={() => window.open("https://github.com/BWPTWanderLand2/Backend")}className="hex" id="hex5"  background="blue" top="30px" left="-105px" content="  SQL" />
<Hex onClick={() => window.open("https://github.com/Rm-lee/eddy")}className="hex" id="hex6"  background="blue" top="188px" left="-105px" content="Linux" />
<Hex onClick={() => window.open("https://github.com/Lambda-School-Labs/job-book-fe)}className="hex"  id="hex7" background="blue" top="30px" left="2px" content="React" />
<Hex onClick={() => window.open("https://github.com/Rm-lee/PObox")}className="hex"  id="hex8" background="blue" top="110px" left="-50px" content=" Node" />
<Hex onClick={() => window.open("https://github.com/BWPTWanderLand2/Backend")}className="hex" id="hex9"  background="blue" top="110px" left="55px" content="Express" />
<Hex onClick={() => window.open("https://github.com/Rm-lee/Sprint-Challenge--Advanced-CSS")}className="hex" id="hex10"  background="blue" top="188px" left="3px" content=" Less" />
<Hex onClick={() => window.open("https://savethisjob.com")}className="hex" id="he11"  background="blue" top="266px" left="-50px" content="Redux" />



</HexCont>
    </>
  );
}
export default Hexagons
