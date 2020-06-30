import React from 'react';
import styled from 'styled-components'
import Navigation from '../components/Navigation/Navigation'
import Hexagons from '../components/Hexagons'

const FloatContainer = styled.div`
width:100%;
display:flex;
flex-direction:column;
justify-content:center;
height:100vh;
align-items:center;
z-index:1;
transform: translate(0,0);
overflow-y:hidden;

`

const FloatText = styled.h1`
font-family:'Open Sans', sans-serif;
margin-top:20px;
width:300px;
transform: skew(0deg, -10deg);
font-size:2rem;
text-align:center;

}
`

const Containerh = styled.div`
width:200%;
height:100%;
z-index:8;
display:flex; 
justify-content:center;
align-items:center;
@keyframes slides{
  from{
   margin-left:0%; 
  }
  to{
margin-left:-100%  
}
 }
 animation: slides 2.5s forwards;
 animation-delay: 3s;
`
const Customh2 = styled.h2`
color:#333333;
text-align:center;
width:500px;
height:100%;
margin-bottom:0;
margin-top:0;
display:flex;
flex-direction:column;
justify-content:center;

`
const Custom2h2 = styled.h2`
color:#333333;
text-align:center;
width:500px;
height:100%;
margin-bottom:0;
margin-top:0;
display:flex;
flex-direction:column;
justify-content:center;
    

`

const Diamond = styled.div`
width: 0;
height: 0;
border: 50px solid transparent;
border-bottom: 70px solid #666666;
position: absolute;
z-index:-5;
top: 20;
transform-origin:bottom;
margin-left:15px;
transform: scale(6);
&:after {
  content: '';
  position: absolute;
  left: -50px;
  top: 70px;
  width: 0;
  height: 0;
  border: 50px solid transparent;
  border-top: 50px solid #333333;
}

`

const DiamondInner = styled.div`
width: 0;
height: 0;
border: 50px solid transparent;
border-bottom: 70px solid white;
position: absolute
z-index:-4;
top: 20;
&:after {
  content: '';
  position: absolute;
  left: -50px;
  top: 70px;
  width: 0;
  height: 0;
  border: 50px solid transparent;
  border-top: 50px solid white;
  filter: drop-shadow(20px 35px 15px #333333);
  transform: scale(1,1.001);

}
transform-origin: bottom;
transform: scale(6,6.3);

`
const CustomImg = styled.div`

background-position:left -2px bottom;
overflow:hidden;
animation-timing-function: linear;
width:400px;
height:40px ;
margin-top:30px;
@keyframes slide{
 0%{
  background-position:left bottom; 
 }
 100%{
  background-position:right bottom;
 }
}
animation: slide 3s forwards;
animation-delay: 3s;
transform: skew(0deg, -10deg);

`;

const ColoredLine = styled.div`
width:250px;;
height:2px;
background-color:#333333;
margin-bottom:20px;
transform: skew(0deg, -10deg);


`
const Brand = styled.h2`
padding-top:20px;

`
function Landing(props) {

  return (
    <>
     <Hexagons />

      <FloatContainer>
        <Diamond />
        <DiamondInner />

        <FloatText> Full Stack<br /> Developer <br /> </FloatText>
        <ColoredLine />
        <CustomImg >
          <Containerh>
            <Custom2h2>A Software Engineer</Custom2h2>

            <Customh2>With a Unique Perspective</Customh2>
          </Containerh>
        </CustomImg>
        <Navigation />
        <Brand >Roger Lee</Brand>

        {/* <Scene/> */}

      </FloatContainer>

    </>
  );
}

export default Landing;