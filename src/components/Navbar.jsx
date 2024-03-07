import React from 'react';
import {
    Nav,
    Logo,
    Links,
    List,
    Button

} from "./Nav/NavComponents"
import ToggleButton from './Nav/ToggleButton';
import "./Nav/Navbar.css"
const Navbar = () => {
    return (
        <Nav>
            <Logo><h1 className='text-2xl font-design font-bold '><a href="/">.DEV</a></h1></Logo>
            <Links>
                <List>
                    <li className='links'><a href="#home" >Home</a></li>
                    <li className='links'><a href="#about" >About</a></li>
                    <li className='links'><a href="#skills" >Skills</a></li>
                    <li className='links'><a href="#projects" >Projects</a></li>
                    <li className='links'><a href="#contact">Contact</a></li>
                </List>
            </Links>
            <Button>
                <ToggleButton />
            </Button>
        </Nav>
    );
};

export default Navbar;
