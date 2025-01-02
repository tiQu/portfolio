import React from 'react';

import { NavItems } from './NavItems';
import { NavLink } from 'react-router-dom';

import './Navbar.scss';

export default function Navbar() {

    const [clicked, setClicked] = React.useState(
        false
    );

    const activeClassName = "nav-links-active"

    return (
        <nav className="NavbarItems">
            <NavLink
                exact
                className="navbar-logo"
                to="./">
                Tilman Queitsch
            </NavLink>
            <div>
              <div className="menu-icon" onClick={() => setClicked(!clicked)}>
                    <i className={clicked ? 'bars-hidden' : 'bars-shown'}>
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-justify" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                    </i>
                    <i className={clicked ? 'x-shown' : 'x-hidden'}>
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-x-square-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                        </svg>
                    </i>
                </div>
                <ul onClick={() => setClicked(!clicked)} className = {clicked ? 'nav-menu active' : 'nav-menu'}>
                    {NavItems.map((item) => {
                        return (
                            <NavLink
                                exact={true}
                                className={
                                    item.cName + ' ' + (({ isActive }) =>
                                        isActive ? activeClassName : undefined)
                                }
                                to={item.url}
                                end >
                                {item.title.toUpperCase()}
                            </NavLink>
                        )
                    })}
                    <a className="nav-links" href="mailto:tqueitsch@my.bcit.ca">CONTACT ME</a>
                </ul>
            </div>
        </nav>
    );
}
