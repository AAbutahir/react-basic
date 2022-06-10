import logo from './logo.svg';
import './Header.css'

function Header() {
    return (
        <div className="header">
            <div className="nav-bar">
                <div className="logo-container">
                    <img src={logo} className="logo-img"  />
                </div>  
                <ul className='nav-menu'>
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Blog</a></li>
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
