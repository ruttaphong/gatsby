import React from 'react'
import Link from 'gatsby-link'

import logo from '../assets/images/logo.svg';

const Header = (props) => (
    <header id="header" className="alt">
        <a href="/"><span className="logo"><img src={logo} height="128px" alt="" /></span>
        	<h1> Ruttaphong Worachartudomphong</h1>
        <p>Programmer, Web developer, Graphic designer.</p></a>
    </header>
)

export default Header
