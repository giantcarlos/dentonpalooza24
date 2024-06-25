import Hamburger from 'hamburger-react';
import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';

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
            <div className="site-title">DENTONPALOOZA
                <div className="hamburger" onClick={navToggle}>
                <Hamburger toggled={isOpen} toggle={setOpen}/>
                </div>
                <div className="sub-header">October 12, 2024 / Rubber Gloves Reahearsal Studios</div>
                {/* <div className={active} onClick={navOff}>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                </div> */}
            </div>
        </nav>
    )
}

export default NavBar;