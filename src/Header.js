import logo from './logo.svg';
import './Header.css'
import { Link, NavLink } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <div className="nav-bar">
                <div className="logo-container">
                    <img src={logo} className="logo-img"  />
                </div>  
                <ul className='nav-menu'>
                    <li>
                        <NavLink activeClassName='active' to='/home'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName='active' to='/about'>About</NavLink>    
                    </li>
                    <li>
                        <NavLink activeClassName='active' to='/blogList'>Blog</NavLink>
                    </li>
                    <li><a>Contact</a></li>
                </ul>  
            </div>
            <div className='header-container'>
                <div className='header-content'>
                    Let's Do together
                </div>
            </div>
            
        </div>
    )
}

export default Header
