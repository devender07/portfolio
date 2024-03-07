import React, { useState, useEffect } from 'react';
import { Card, ProjectImage } from './Container';

const ProjectCard = (props) => {
    const [list, setList] = useState([]);

    useEffect(() => {
        setList(props.list);
    }, [props.list]);

    return (
        <Card>
            <ProjectImage>
                <img src={props.address} alt="logo" className='projectImage' />
            </ProjectImage>
            <h2 className='text-xl font-semibold'>{props.heading || "heading"}</h2>

            <ul>
                {list.map((item, index) => (
                    <li key={index} className='list-disc ml-10'>{item}</li>
                ))}
            </ul>

            <h2 className='text-lg font-semibold'>Tech stack : <span className='text-base font-normal'>{props.tech}</span></h2>
            <div className='flex justify-between w-full'>
                <a href={props.github} className='bg-green-500 text-white p-2 rounded' target='_blank' rel="noreferrer">Checkout on Github</a>
                {props.live && <a href={props.live} className='bg-green-500 text-white p-2 rounded' target='_blank' rel="noreferrer">Live</a>}
            </div>
        </Card>
    );
}

export default ProjectCard;
