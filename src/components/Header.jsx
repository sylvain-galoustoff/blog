/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMenu } from 'react-icons/io5'

function Header() {

    const [viewport, setViewport] = useState(0)
    const [burgerStatus, setBurgerStatus] = useState('close')

    const switchBurger = () => {

        const newBurgerStatus = burgerStatus === 'close' ? 'open' : 'close'
        setBurgerStatus( newBurgerStatus )
        
    }

    const updateWidth = () => {
        setViewport( window.innerWidth )
    }

    useEffect( () => {

        updateWidth()

        window.addEventListener('resize', updateWidth)

        return () => {
            window.removeEventListener('resize', updateWidth)
        }

    }, [] )

    return (
        <header className={burgerStatus}>
            <menu className="container">
                { viewport > 490 ? <Menu /> : <Burger switchBurger={switchBurger} /> }
            </menu>
        </header>
    );
}

export default Header

function Menu() {
    return (
        <ul>
            <li>
                <NavLink to="/home">Home</NavLink>
            </li>
            <li>
                <NavLink to="demos">Démos</NavLink>
            </li>
            <li>
                <NavLink to="contact">Contact</NavLink>
            </li>
            <li>
                <NavLink to="about">C'est moi</NavLink>
            </li>
        </ul>
    );
}

function Burger(props) {

    const switchBurger = () => {
        props.switchBurger()
    }

    return (
        <div id="burger">

            <IoMenu onClick={switchBurger} />

            <ul>
                <li>
                    <NavLink to="/home" onClick={switchBurger}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="demos" onClick={switchBurger}>Démos</NavLink>
                </li>
                <li>
                    <NavLink to="contact" onClick={switchBurger}>Contact</NavLink>
                </li>
                <li>
                    <NavLink to="about" onClick={switchBurger}>C'est moi</NavLink>
                </li>
            </ul>

        </div>
    );
}