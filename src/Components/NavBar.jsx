import Hamburger from 'hamburger-react';
import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { motion } from 'framer-motion';


function NavBar() {
    const [isOpen, setOpen] = useState(false)
    const [active, setActive] = useState('nav-links')
    const navToggle = () => {
        active === 'nav-links' ? setActive('nav-links-active') : setActive('nav-links');
        console.log(active);
      }
    const navOff = () => {
        setActive('nav-links')
        setOpen(false)
    }

    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -80; 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    }

    const scrollWithOffset2 = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = 40; 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    }

    const scrollWithOffset3 = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -120; 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    }

    const item = {
        hidden: { y: -200 },
        show: { y: 0 },
      }
    

    return (
        <nav>
            <motion.div variants={item} initial="hidden" animate="show" transition={{duration: .75, delay:.5}} className="header">DENTONPALOOZA 4
                <div className="hamburger" onClick={navToggle}>
                <Hamburger toggled={isOpen} toggle={setOpen}/>
                </div>
                <div className="sub-header">October 12, 2024 / Rubber Gloves Reahearsal Studios</div>
                <div className={active} onClick={navOff}>
                    <HashLink smooth to="#" className="links" scroll={el => scrollWithOffset(el)}>HOME ➤</HashLink>
                    <HashLink smooth to="#lineup" className="links" scroll={el => scrollWithOffset2(el)}>LINEUP ➤</HashLink>
                    <HashLink smooth to="#tickets" className="links" scroll={el => scrollWithOffset(el)}>TICKETS ➤</HashLink>
                    <HashLink smooth to="#merch" className="links" scroll={el => scrollWithOffset(el)}>MERCH ➤</HashLink>
                    <HashLink smooth to="#press" className="links" scroll={el => scrollWithOffset3(el)}>PRESS ➤</HashLink>
                </div>
            </motion.div>
        </nav>
    )
}

export default NavBar;