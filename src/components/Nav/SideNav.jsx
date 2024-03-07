import React from 'react';
import { CSSTransition } from 'react-transition-group';
import {
    SideBarContainer,
    SideBarLinksContainer,
    SideBarLinks,
    SideBarSocial,
    SideBarFooter,
    SideBarSocialLinks
} from "./NavComponents";
import "./Navbar.css"
const SideNav = ({ open }) => {
    return (
        <>
            <CSSTransition
                in={open}
                timeout={200}
                classNames="slide"
                unmountOnExit
            >
                <SideBarContainer>
                    <SideBarLinksContainer>
                        <SideBarLinks>
                            <li className='links'><a href="#home">Home</a></li>
                            <li className='links'><a href="#about">About</a></li>
                            <li className='links'><a href="#skills">Skills</a></li>
                            <li className='links'><a href="#projects">Projects</a></li>
                            <li className='links'><a href="#contact">Contact</a></li>
                        </SideBarLinks>
                    </SideBarLinksContainer>

                    <SideBarSocial>
                        <SideBarSocialLinks>
                            <li><a href="https://github.com/shylen07" target='_blank' rel="noreferrer" className='text-3xl'><ion-icon name="logo-github"></ion-icon></a></li>
                            <li><a href="https://www.linkedin.com/in/devender-singh-75976717b/" className='text-3xl' target='_blank' rel="noreferrer"><ion-icon name="logo-linkedin"></ion-icon></a></li>
                            <li><a href="https://leetcode.com/dkathait269/" className='text-3xl' target='_blank' rel="noreferrer"><ion-icon name="code-outline"></ion-icon></a></li>
                        </SideBarSocialLinks>
                    </SideBarSocial>
                    <SideBarFooter>
                        <h4 className='text-white font-design'>Made By Devender Singh &#129293;</h4>
                    </SideBarFooter>
                </SideBarContainer>

            </CSSTransition>

        </>
    );
};

export default SideNav;
