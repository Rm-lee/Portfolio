import React, { useEffect } from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Hexagons from './Hexagons'
function Skills(props) {
  const Page = styled.div`
    min-height:100vh;
    width:100vw;
    background: white;  
    `
  const SkillsDiv = styled.div`
    margin:300px 50px 0;
    box-shadow: 5px 10px 20px #888888;
    padding:20px;
    min-width:400px;
    max-width:600px;


    `
  const Div = styled(Link)`
    display:flex;
    justify-content:center;
    margin: 0 auto;
    box-shadow: 4px 3px 4px #888888;
    width:100px;
    background-color:#f7f7f7;
    text-decoration:none;
    padding:5px;
    color:black;
    `

  useEffect(() => {
    let hexagons = document.querySelectorAll(".hex")
    let top = 20;
    let left = 50
    setTimeout(hexagons.forEach(el => {
      el.style['margin-top'] = '0px'
      if (top < 700) {
        el.style['left'] = `50px`;

        el.style['top'] = `${top}px`;
        top += 120;
      }
      else {
        el.style['left'] = `${left}px`;
        el.style['top'] = `${top}px`;
        left += 150
      }

    }), 500
    )



  }, [])
  return (
    <>
      <Page>
        <Hexagons />
        <div style={{ marginLeft: "25%", marginTop: "10px" }}>
          <SkillsDiv><p style={{ fontSize: "2rem", width: "100%", textAlign: "center" }}>Skills</p>
            <p>Web Developer excelling in high paced work environments, finding solutions to challenges and focused on exceeding expectations. Proven experience
            developing web sites/apps using HTML, CSS, React, JavaScript, Redux and Node. Experience building products for desktop with Python. Nearly a
            decade of experience with troubleshooting networked systems. Familiar with Linux systems and basic Linux administration as well as scripting
languages including Bash and Python.</p>
            <br />
            <Div to="/">
              Home
</Div></SkillsDiv>
        </div>
      </Page>
    </>
  );
}
export default Skills;