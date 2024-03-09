import React from 'react';
import { Container, Heading, HeroContainer } from '../components/Container';
import Rat from "../assets/rat_in_maze.png";
import Typing from "../assets/typing_master.png"
import Note from "../assets/noteapp.png"
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
    const project_1 = ["Rat in a maze", ["Based on DFS Algorithm.", "Using Backtracking.",'Advance DSA.'],"Python","https://github.com/devender07/Rat_in_a_maze"];
    const project_2 =["Terminal based typing master",["JSON data.","Typing speed track.","User record."],"Python","https://github.com/devender07/typing-master"]
    const project_3 =["Full-stack NoteApp",["MERN stack.","User authentication and authorization.","Create, read, update and delete notes.","Notes linked with User."],"React Tailwind Node Express MongoDB","https://github.com/devender07/noteapp"]

    return (
        <Container id="projects">
            <div className='flex flex-col items-center'>
                <Heading>Projects</Heading>
                <HeroContainer className="flex-col xl:flex-row p-2 min-h-[90vh]">
                    <ProjectCard
                        address={Rat} 
                        heading={project_1[0]}
                        list={project_1[1]} 
                        tech={project_1[2]}
                        github={project_1[3]}
                    />
                    <ProjectCard
                        address={Note} 
                        heading={project_3[0]} 
                        list={project_3[1]} 
                        tech={project_3[2]}
                        live={"https://noteapp-by-dev.netlify.app/login"} 
                        github={project_3[3]}
                        
                    />
                    <ProjectCard
                        address={Typing} 
                        heading={project_2[0]} 
                        list={project_2[1]}
                        tech={project_2[2]}
                        github={project_2[3]}
                        
                    />
                </HeroContainer>
            </div>
        </Container>
    );
};

export default Projects;
