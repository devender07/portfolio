import React from 'react'
import { Container, Heading, HeroContainer, Info, Footer } from '../components/Container'
const Contact = () => {
    return (
        <Container id="contact">
            <div className='flex flex-col items-center bg-green-500'>
                <Heading className='text-white'>Contact</Heading>
                <HeroContainer className="flex-col lg:flex-row relative min-h-[30vh]">
                    <Info className='w-full h-[30vh] lg:w-1/3  p-2 rounded text-white gap-5 items-center'>
                        <h2 className='text-3xl font-bold py-2'>Devender Singh </h2>
                        <p className='text-xl'>Location : <span>Dehradun, Uttarakhand</span></p>
                        <p className='text-xl'>Email: <span>Dkathait269@gmail.com</span></p>
                        <p className='text-xl'>Phone Number : <span>+91 9045436494</span></p>
                    </Info>
                    <Info className='w-full h-[30vh] lg:w-1/3 p-2 rounded text-white gap-5 items-center'>
                        <h2 className='text-3xl font-bold py-2'>Social</h2>
                        <p className='text-xl'><a href="https://www.linkedin.com/in/devender-singh00/" target='_blank' className='text-white' rel="noreferrer">LinkedIn</a></p>
                        <p className='text-xl'><a href="https://github.com/devender07" target='_blank' className='text-white' rel="noreferrer">Guthub</a></p>
                    </Info>

                    <Footer>
                        <hr />
                        <h4 className='text-xl font-bold text-white font-design text-center'>Made By Devender Singh &#129293;</h4>
                    </Footer>
                </HeroContainer>

            </div>
        </Container>
    )
}

export default Contact