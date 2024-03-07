import React, { useState } from 'react';
import "./Navbar.css";
import SideNav from './SideNav';

const ToggleButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggleButton = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className='toggleButton' onClick={handleToggleButton}>
                <span className={isOpen ? 'open' : ''}></span>
                <span className={isOpen ? 'open' : ''}></span>
                <span className={isOpen ? 'open' : ''}></span>
            </div>
            <SideNav open={isOpen}/>
        </>
    );
};

export default ToggleButton;
