import React from 'react'
import NavSearch from './NavSearch'
import LinksDropdown from './LinksDropdown'
import DarkMode from './DarkMode'
import Logo from './Logo'

const Navbar = () => {
    return (
        <>
            <div>Navbar</div>
            <NavSearch></NavSearch>
            <LinksDropdown></LinksDropdown>
            <DarkMode></DarkMode>
            <Logo></Logo>
        </>
    )
}

export default Navbar