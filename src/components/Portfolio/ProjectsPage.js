import React from 'react'
import {Link} from 'react-router-dom'
import ProjectsPageCard from '../Portfolio/ProjectsPageCard'
import wander from '../../Assets/wanderlustImg.png'
import guidr from '../../Assets/guidr.png'
import greatidea from '../../Assets/greatidea.png'
import vid2jsonimg from '../../Assets/vid2jsonimg.png'
import pykey from '../../Assets/pykey.png'
import savethisjob from '../../Assets/savethisjob.gif'
import pobox from '../../Assets/poboxSC.png'
import getFlix from '../../Assets/getflix.png'
import Navigation from '../Navigation/Navigation'
import Icon from '../../Assets/code.png'

function ProjectsPage() {
    return (<>
        <div style={{width:"100%",margin:"0 auto",display:"flex",justifyContent:"space-between"}}>
       <div style={{paddingTop:"30px",background:"white",borderRight:"2px dashed grey",width:"200px",display:"flex",flexDirection:'column',alignItems:"center"}}>
           <h1>Projects</h1>
           <Link to="/">
               <div style={{display:"flex",flexDirection:"column",alignItems:"center",marginTop:"30px"}}>
                   <img alt="logo"style={{height:"50px",width:"50px"}}src={Icon}color="blue">
                       </img>
                       <p style={{color:"black"}}>Home</p>
                       </div>
                       </Link>
           
           <Navigation/>
       </div>
        <div style={{width:"90%",display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center"}}>
             <ProjectsPageCard description={"Crossplatform Electron/react application for organizing coding projects and their resources"}url={"https://github.com/Rm-lee/PObox"}image={pobox} name={"PoBox"}/>
             <ProjectsPageCard description={"Web app/chrome extension for organizing, saving and updating information for job hunting"} image={savethisjob} url={"https://github.com/Lambda-School-Labs/job-book-fe"} name={"SaveThisJob"}/>
            <ProjectsPageCard description={"Frontend react app for guides logging personal trips"} url={"https://wanderlust19.netlify.app/"} image={wander} name={"wanderLust"}/>
            <ProjectsPageCard description={"A simple react site to search for netlix hidden categories"}url={"https://getflix.netlify.app/"}image={getFlix} name={"GetFlix"}/>
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
