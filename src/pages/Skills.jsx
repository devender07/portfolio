import React from 'react'
import { Container, Heading, HeroContainer, Info } from '../components/Container'

const Skills = () => {
    return (
        <Container id="skills">
            <div className='flex flex-col items-center'>
                <Heading>Skills</Heading>
                <HeroContainer className='flex-col lg:flex-row p-2 min-h-[90vh]'>
                    <Info className='w-full lg:w-2/5 bg-green-500 rounded gap-10 px-2 py-5'>
                        <h2 className='text-3xl font-bold text-white md:ml-10'>Technologies</h2>
                        <div className='min-h-[30vh] w-full flex items-center justify-center flex-wrap gap-10'>
                            <div className="html box" />
                            <div className="css box" />
                            <div className="js box" />
                            <div className="tailwind box" />
                            <div className="react box" />
                            <div className="node box" />
                            <div className="python box" />
                            <div className="mongodb box" />
                            <div className="git box" />
                        </div>
                    </Info>

                    <Info className='w-full lg:w-2/5 border border-green-500 rounded gap-10 px-2 py-5'>
                        <h2 className='text-3xl font-bold md:ml-10'>Tools</h2>
                        <div className='min-h-[30vh] w-full flex items-center justify-center flex-wrap gap-10'>
                            <div className="vscode box" />
                            <div className="postman box" />
                            <div className="github box" />
                            <div className="figma box"  />
                        </div>
                    </Info>
                </HeroContainer>
            </div>
        </Container>
    )
}

export default Skills