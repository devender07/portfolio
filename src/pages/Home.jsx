import React from 'react';
import Typewriter from 'typewriter-effect';
import {
    Container,
    HeroContainer,
    ImageContainer,
    Info,
    Photo
} from "../components/Container";
import "./css/Common.css";
import { DownloadButton, ResumeButton } from '../components/Button/Button';
const Home = () => {
    return (
        <Container id="home">
            <HeroContainer className=' home px-2 flex-col md:flex-row-reverse min-h-[100vh]'>
                <div className='h-[30vh]'>
                    <ImageContainer className='image '>
                        <Photo className='photo' />
                    </ImageContainer>
                </div>

                <Info className='h-[50vh] gap-7'>
                    <p className='text-2xl text-green-700'>Hi, my name is</p>
                    <h2 className='text-4xl md:text-5xl font-extrabold font-poppins text-slate-800'>Devender Singh</h2>
                    <h3 className='text-3xl md:text-4xl font-bold font-poppins text-slate-600'>I build things for the web.</h3>
                    <div className='inline-flex'>
                        <p className='text-xl md:text-2xl font-semibold'>I am a &nbsp;</p>
                        <Info className='text-xl md:text-2xl text-green-700 font-semibold'><Typewriter
                            options={{
                                strings: ['Front-End Web Developer.', 'Full-Stack Web Developer.', 'Algorithm Developer.'],
                                autoStart: true,
                                loop: true,
                                cursor: '|',
                            }}
                        />
                        </Info>
                    </div>
                    <div className='flex justify-between w-[275px]'>
                        <ResumeButton />
                        <DownloadButton />
                    </div>
                </Info>
            </HeroContainer>
        </Container>
    )
}

export default Home;