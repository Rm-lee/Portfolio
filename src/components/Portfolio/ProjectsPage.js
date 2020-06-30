import React from 'react'
import {Link} from 'react-router-dom'
import {Label} from 'semantic-ui-react'
import ProjectsPageCard from '../Portfolio/ProjectsPageCard'
import styled from 'styled-components'
import ProjectCard from '../ProjectCard'
import wander from '../../Assets/wanderlustImg.png'
import guidr from '../../Assets/guidr.png'
import greatidea from '../../Assets/greatidea.png'
import vid2jsonimg from '../../Assets/vid2jsonimg.png'
import pykey from '../../Assets/pykey.png'
import savethisjob from '../../Assets/savethisjob.gif'
import pobox from '../../Assets/poboxSC.png'
function ProjectsPage() {
    return (<>
        <div style={{width:"95%",margin:"0 auto",display:"flex",justifyContent:"space-around"}}>
       <div>
           <h1>Projects</h1>
           <Label size="big" color="blue"><Link to="/">Home</Link></Label>
       </div>
       
        <div style={{width:"90%",display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center"}}>
             <ProjectsPageCard description={"Crossplatform Electron/react application for organizing coding projects and their resources"}url={"https://github.com/Rm-lee/PObox"}image={pobox} name={"PoBox"}/>
             <ProjectsPageCard description={"Web app/chrome extension for organizing, saving and editing your current job search process"}url={"https://savethisjob.com"}image={savethisjob} name={"SaveThisJob"}/>
            <ProjectsPageCard description={"Frontend react app for guides logging personal trips"} url={"https://wanderlust19.netlify.app/"} image={wander} name={"wanderLust"}/>
            <ProjectsPageCard description={"Frontend react app for guides logging personal trips"}url={"https://guidrpro.netlify.app/"}image={guidr} name={"Guidr"}/>
            <ProjectsPageCard description={"HTML site mock up"}url={"https://github.com/Rm-lee/User-Interface/tree/Roger-Lee"}image={greatidea} name={"Great Idea"}/>
            <ProjectsPageCard description={"Python script for cutting videos into frames then parsing RGB data into json format"}url={"https://github.com/Rm-lee/Vid-to-Json"}image={vid2jsonimg} name={"Vid2Json"}/>
            <ProjectsPageCard description={"Python script for mapping a second keyboard device's inputs to perform certain tasks based on a configuration file"}url={"https://github.com/Rm-lee"}image={pykey} name={"Py-Key"}/>
             </div>   
        </div>
        </>
    )
}
export default ProjectsPage