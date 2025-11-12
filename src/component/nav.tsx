import './nav.scss'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '@/assets/shared/logo.svg?react';
import Close from '@/assets/shared/icon-close.svg?react';
import Open from '@/assets/shared/icon-hamburger.svg?react';

interface NavItem {
    id: number,
    name: string,
    link: string
}

const navList: NavItem[] = [
    {id: 1, name: 'Home', link: '/'},
    {id: 2, name: 'Destination', link: '/destination'},
    {id: 3, name: 'Crew', link: '/crew'},
    {id: 4, name: 'Technology', link: '/technology'},
]

const NavMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <nav className={`navMenu ${isOpen ? 'is-open' : ''}`}>
            <Logo className='navMenu__logo'/>
            <div className='navMenu__list'>
                <ul className='navMenu__list--container' id='navigation'>
                    {navList.map(({ id, name, link }) => (
                        <li className='navMenu__list--item' key={id}>
                            <NavLink 
                                to={link}
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                                    {name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <button 
                    className='navMenu__list--button' 
                    type='button' 
                    aria-label='toggle menu' 
                    aria-expanded={isOpen}
                    onClick={handleToggle}
                    aria-controls='navigation'
                >
                    {isOpen ? <Close className='navMenu__list--icon'/> : <Open className='navMenu__list--icon'/>}
                </button>
            </div>
        </nav>
    )
}

export default NavMenu;