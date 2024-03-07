import React from 'react'
import { Container, Heading, HeroContainer, Info } from '../components/Container'

const About = () => {
    return (
        <Container id="about">
            <div className='flex flex-col items-center'>
                <Heading>About Me </Heading>
                <HeroContainer className="flex-col lg:flex-row min-h-[90vh]">
                    <Info className='w-full lg:w-1/3 bg-green-600 p-2 rounded text-white '>
                        <h2 className='text-3xl font-bold py-2'>Get to know me!</h2>
                        <p className='text-[15px] md:text-xl leading-6 my-2'>Hello! 👋 I'm <span className='text-green-200 font-bold'>Devender Singh</span>, a passionate and detail-oriented web developer.
                            I design and develop experiences that make people's lives simplerr through Web.
                            I work with HTML5, CSS3, Javascript, React, Node and MongoDB.
                        </p>
                        <p className='text-[15px] md:text-xl leading-6 my-2'>
                            I'm a MERN Developer building the Front-end as well as backend of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the <a href="#projects"><span className='text-green-200 font-bold'>Projects</span></a> section.
                            Feel free to Connect or Follow me on my <span className='text-green-200 font-bold'>Linkedin.</span>
                        </p>
                        <p className='text-[15px] md:text-xl leading-6 my-2'>
                            I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to <a href="#contact"><span className='text-green-200 font-bold'>Contact</span></a>
                        </p>
                    </Info>

                    <Info className='w-full lg:w-1/3 p-2 '>
                        <h2 className='text-3xl font-bold '>Statistics :</h2>
                        <div className='w-full flex items-center justify-center text-sm lg:text-lg text-center py-10'>
                            <div className='w-2/3 p-2  rounded bg-green-600 border text-white '>
                                <h2>Months of coding :</h2>
                                <p> 11+</p>
                            </div>
                            <div className='w-2/3  p-2 rounded bg-green-600 border text-white'>
                                <h2>Dsa Question :</h2>
                                <p> 200+ </p>
                            </div>
                            <div className='w-2/3  p-2 rounded bg-green-600 border text-white'>
                                <h2>Soft Skills :</h2>
                                <p> 100+ hours</p>
                            </div>
                        </div>

                        <h2 className='text-3xl font-bold'>Certifications :</h2>
                        <div className='w-full flex items-center justify-center text-center py-10 text-sm md:text-lg '>
                            <div className='w-1/3 p-2 rounded bg-green-600 border  cursor-pointer'>
                                <a href="https://files.codingninjas.in/certi_image5580036bb8219fbdc748008a0ca0e26373ab09.jpg" className='h-full w-full' target='_blank' rel="noreferrer"><h2 className='text-white'>HTML</h2></a>
                            </div>

                            <div className='w-1/3 p-2 rounded bg-green-600 border cursor-pointer'>
                                <a href="https://files.codingninjas.in/certi_image558011d21fef82d995756223e559679de069e9.jpg" className='h-full w-full' target='_blank' rel="noreferrer"><h2 className='text-white'>CSS</h2></a>
                            </div>

                            <div className='w-2/3 md:min-w-[200px]  p-2 rounded bg-green-600 border text-white cursor-pointer'>
                                <a href="https://www.freecodecamp.org/certification/fcced79757e-ac71-4dc7-a9a2-98a6b6c63670/responsive-web-design" className='h-full w-full' target='_blank' rel="noreferrer"><h2 className='text-white'>Responsive Design</h2></a>
                            </div>
                            <div className='w-1/3 p-2 rounded bg-green-600 border text-white cursor-pointer'>
                                <a href="https://www.hackerrank.com/certificates/5067d0ea9e95" className='h-full w-full' target='_blank' rel="noreferrer"><h2 className='text-white'>Python</h2></a>
                            </div>
                        </div>
                    </Info>
                </HeroContainer>
            </div>
        </Container>
    )
}

export default About