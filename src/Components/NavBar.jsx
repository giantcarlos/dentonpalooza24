import Hamburger from 'hamburger-react';
import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';

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

    return (
        <nav>
            <div className="header">DENTONPALOOZA 4
                <div className="hamburger" onClick={navToggle}>
                <Hamburger toggled={isOpen} toggle={setOpen}/>
                </div>
                <div className="sub-header">October 12, 2024 / Rubber Gloves Reahearsal Studios</div>
                <div className={active} onClick={navOff}>
                    <HashLink to="#" className="links">HOME ➤</HashLink>
                    <HashLink to="#lineup" className="links">LINEUP ➤</HashLink>
                    <HashLink to="#shop" className="links">TICKETS ➤</HashLink>
                    <HashLink to="#shop" className="links">MERCH ➤</HashLink>
                    <HashLink to="#" className="links">PRESS ➤</HashLink>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;